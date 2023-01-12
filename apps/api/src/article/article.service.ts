import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import slugify from 'slugify';
import { Repository } from 'typeorm';

import {
  IArticleResponseBody,
  IArticlesResponseBody,
} from '@starter/api-types';

import { FollowEntity } from '../profile/follow.entity';
import { TagService } from '../tag/tag.service';
import { UserEntity } from '../users/user.entity';
import { ArticleEntity } from './article.entity';
import { CommentEntity } from './comment.entity';
import { ArticleFeedQueryParams } from './dto/article-feed.dto';
import { ArticlesQueryParams } from './dto/articles-query.dto';
import { ArticleCommentDto } from './dto/create-article-comment.dto';
import { ArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {
  private readonly logger = new Logger(ArticleService.name);

  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(FollowEntity)
    private readonly followRepository: Repository<FollowEntity>,
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
    private readonly tagService: TagService,
  ) {}

  private getSlug(title: string): string {
    return (
      slugify(title, { lower: true }) +
      '-' +
      ((Math.random() * Math.pow(36, 6)) | 0).toString(36)
    );
  }

  async getArticles(
    query: ArticlesQueryParams,
    userId?: number,
  ): Promise<IArticlesResponseBody> {
    const queryBuilder = this.articleRepository
      .createQueryBuilder('articles')
      .leftJoinAndSelect('articles.author', 'author');

    if (query.tag) {
      queryBuilder.andWhere('articles.tagList LIKE :tag', {
        tag: `%${query.tag}`,
      });
    }

    if (query.author) {
      const author = await this.userRepository.findOne({
        where: { username: query.author },
      });
      if (author) {
        queryBuilder.andWhere('articles.authorId = :id', {
          id: author.id,
        });
      }
    }

    if (query.favorited) {
      const author = await this.userRepository.findOne({
        where: {
          username: query.favorited,
        },
        relations: ['favorites'],
      });
      const ids = author.favorites.map((el) => el.id);

      if (ids.length > 0) {
        queryBuilder.andWhere('articles.authorId IN (:...ids)', { ids });
      } else {
        queryBuilder.andWhere('1=0');
      }
    }

    queryBuilder.orderBy('articles.createdAt', 'DESC');

    const articlesCount = await queryBuilder.getCount();

    if (query.limit) {
      queryBuilder.limit(query.limit);
    }

    if (query.offset) {
      queryBuilder.offset(query.offset);
    }

    let favoriteIds: number[] = [];

    if (userId) {
      const currentUser = await this.userRepository.findOne({
        where: { id: userId },
        relations: ['favorites'],
      });
      favoriteIds = currentUser.favorites.map((favorite) => favorite.id);
    }

    const articles = await queryBuilder.getMany();
    const articlesWithFavorited = articles.map((article) => {
      const favorited = favoriteIds.includes(article.id);
      return { ...article, favorited };
    });

    return { articles: articlesWithFavorited, articlesCount };
  }

  async findBySlug(slug: string): Promise<ArticleEntity> {
    return await this.articleRepository.findOne({ where: { slug } });
  }

  async getFeed(currentUserId: number, query: ArticleFeedQueryParams) {
    const follows = await this.followRepository.find({
      where: { followerId: currentUserId },
    });

    if (follows.length === 0) {
      return { articles: [], articlesCount: 0 };
    }

    const followingUserIds = follows.map((follow) => follow.followingId);
    const queryBuilder = this.articleRepository
      .createQueryBuilder('articles')
      .leftJoinAndSelect('articles.author', 'author')
      .where('articles.authorId IN (:...ids)', { ids: followingUserIds });

    queryBuilder.orderBy('articles.createdAt', 'DESC');

    const articlesCount = await queryBuilder.getCount();

    if (query.limit) {
      queryBuilder.limit(query.limit);
    }

    if (query.offset) {
      queryBuilder.offset(query.offset);
    }

    const articles = await queryBuilder.getMany();

    return { articles, articlesCount };
  }

  async createArticle(
    user: UserEntity,
    payload: ArticleDto,
  ): Promise<ArticleEntity> {
    const article = new ArticleEntity();
    Object.assign(article, payload);
    if (!article.tagList) {
      article.tagList = [];
    }
    article.slug = this.getSlug(payload.title);
    article.author = user;

    // Creating tags from tagList
    const [createdArticle] = await Promise.all([
      this.articleRepository.save(article),
      ...article.tagList.map((name) => this.tagService.createTag({ name })),
    ]);
    return createdArticle;
  }

  async updateArticle(
    slug: string,
    currentUserId: number,
    payload: ArticleDto,
  ): Promise<ArticleEntity> {
    const article = await this.findBySlug(slug);

    if (!article) {
      throw new HttpException('Article does not exist', HttpStatus.NOT_FOUND);
    }

    if (article.author.id !== currentUserId) {
      throw new HttpException('You are not an author', HttpStatus.FORBIDDEN);
    }

    Object.assign(article, payload);

    return await this.articleRepository.save(article);
  }

  async deleteArticle(slug: string, currentUserId: number) {
    const article = await this.findBySlug(slug);

    if (!article) {
      throw new HttpException('Article does not exist', HttpStatus.NOT_FOUND);
    }

    if (article.author.id !== currentUserId) {
      throw new HttpException('You are not an author', HttpStatus.FORBIDDEN);
    }

    return await this.articleRepository.delete({ slug });
  }

  async addArticleToFavorites(
    slug: string,
    userId: number,
  ): Promise<ArticleEntity> {
    const article = await this.findBySlug(slug);
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['favorites'],
    });

    this.logger.log('ARTICLE ' + JSON.stringify(article));

    const isNotFavorited =
      user.favorites.findIndex(
        (articleInFavorites) => articleInFavorites.id === article.id,
      ) === -1;

    if (isNotFavorited) {
      user.favorites.push(article);
      article.favoritesCount++;
      await this.userRepository.save(user);
      await this.articleRepository.save(article);
    }

    return article;
  }

  async getCommentsOnArticle(slug: string): Promise<CommentEntity[]> {
    const article = await this.findBySlug(slug);
    return article.comments;
  }

  async createCommentOnArticle(
    slug: string,
    user: UserEntity,
    payload: ArticleCommentDto,
  ) {
    const article = await this.findBySlug(slug);

    const comment = new CommentEntity();
    Object.assign(comment, payload);
    comment.author = user;
    comment.article = article;

    return await this.commentRepository.save(comment);
  }

  async deleteCommentFromArticle(
    slug: string,
    commentId: number,
    userId: number,
  ) {
    const article = await this.findBySlug(slug);
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['comments'],
    });

    const articleCommentIndex = article.comments.findIndex(
      (articleComment) => articleComment.id === commentId,
    );
    const userCommentIndex = user.comments.findIndex(
      (userComment) => userComment.id === commentId,
    );

    if (articleCommentIndex > -1) {
      article.comments.splice(articleCommentIndex, 1);
      await this.articleRepository.save(article);
    }

    if (userCommentIndex > -1) {
      user.comments.splice(userCommentIndex, 1);
      await this.userRepository.save(user);
    }

    return await this.commentRepository.delete({ id: commentId });
  }

  async deleteArticleFromFavorites(
    slug: string,
    userId: number,
  ): Promise<ArticleEntity> {
    const article = await this.findBySlug(slug);
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['favorites'],
    });

    const articleIndex = user.favorites.findIndex(
      (articleInFavorites) => articleInFavorites.id === article.id,
    );

    if (articleIndex > -1) {
      user.favorites.splice(articleIndex, 1);
      article.favoritesCount--;
      await this.userRepository.save(user);
      await this.articleRepository.save(article);
    } else {
      throw new HttpException(
        'Article is not in favorites',
        HttpStatus.NOT_FOUND,
      );
    }
    return article;
  }

  buildArticleResponse(article: ArticleEntity): IArticleResponseBody {
    return { article };
  }

  buildArticleCommentResponse(comment: CommentEntity) {
    delete comment.article;
    return { comment };
  }
}
