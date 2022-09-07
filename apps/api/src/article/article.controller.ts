import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import {
  IArticleResponseBody,
  IArticlesResponseBody,
} from '@starter/api-types';

import { CheckPolicies } from '../casl/check-policies.decorator';
import { PoliciesGuard } from '../casl/policies.guard';
import {
  DeleteArticlePolicyHandler,
  PatchArticlePolicyHandler,
  PatchUserPolicyHandler,
} from '../casl/policy-handlers';
import { UserParam } from '../users/user.decorator';
import { UserEntity } from '../users/user.entity';
import { ArticleService } from './article.service';
import { ArticlesQueryParams } from './dto/articles-query.dto';
import { CreateArticleDto } from './dto/create-article.dto';

@ApiBearerAuth()
@ApiTags('articles')
@Controller('v1/articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  @ApiResponse({ status: 201, description: 'Get Articles Request Completed' })
  @ApiResponse({ status: 400, description: 'Get Articles Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getArticles(
    @UserParam('id') userId: number,
    @Query()
    query: ArticlesQueryParams,
  ): Promise<IArticlesResponseBody> {
    return await this.articleService.getArticles(userId, query);
  }

  /**
   * Route to create an article
   * @param {ArticleDto} payload the article dto
   */
  @Post()
  @ApiResponse({
    status: 201,
    description: 'Create Articles Request Completed',
  })
  @ApiResponse({ status: 400, description: 'Create Articles Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async createArticle(
    @UserParam() user: UserEntity,
    @Body() payload: CreateArticleDto,
  ): Promise<IArticleResponseBody> {
    const article = await this.articleService.createArticle(
      user,
      payload.article,
    );
    return this.articleService.buildArticleResponse(article);
  }

  /**
   * Route to get a single article
   * @param {string} slug the article slug
   */
  @Get(':slug')
  @ApiResponse({
    status: 201,
    description: 'Get Article Request Completed',
  })
  @ApiResponse({ status: 400, description: 'Get Article Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getArticle(@Param('slug') slug: string): Promise<IArticleResponseBody> {
    const article = await this.articleService.findBySlug(slug);
    return this.articleService.buildArticleResponse(article);
  }

  @Put(':slug')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new PatchArticlePolicyHandler())
  @ApiResponse({
    status: 201,
    description: 'Edit Article Request Completed',
  })
  @ApiResponse({ status: 400, description: 'Edit Article Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async updateArticle(
    @UserParam('id') currentUserId: number,
    @Param('slug') slug: string,
    @Body('article') updateArticleDto: CreateArticleDto,
  ) {
    const article = await this.articleService.updateArticle(
      slug,
      updateArticleDto,
      currentUserId,
    );
    return this.articleService.buildArticleResponse(article);
  }

  /**
   * Route to get a single article
   * @param {string} slug the article slug
   */
  @Delete(':slug')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new DeleteArticlePolicyHandler())
  @ApiResponse({
    status: 201,
    description: 'Delete Article Request Completed',
  })
  @ApiResponse({ status: 400, description: 'Delete Article Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async deleteArticle(
    @Param('slug') slug: string,
  ): Promise<IArticleResponseBody> {
    const article = await this.articleService.findBySlug(slug);
    return this.articleService.buildArticleResponse(article);
  }

  @Post(':slug/favorite')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new PatchUserPolicyHandler())
  @ApiResponse({
    status: 201,
    description: 'Favourite an Article Request Completed',
  })
  @ApiResponse({ status: 400, description: 'Favourite an Article Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async favouriteArticle(
    @UserParam('id') currentUserId: number,
    @Param('slug') slug: string,
  ) {
    const article = await this.articleService.addArticleToFavorites(
      slug,
      currentUserId,
    );
    return this.articleService.buildArticleResponse(article);
  }

  @Delete(':slug/favorite')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new PatchUserPolicyHandler())
  @ApiResponse({
    status: 201,
    description: 'Unfavourite an Article Request Completed',
  })
  @ApiResponse({
    status: 400,
    description: 'Unfavourite an Article Bad Request',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async deleteArticleFromFavorites(
    @UserParam('id') currentUserId: number,
    @Param('slug') slug: string,
  ) {
    const article = await this.articleService.deleteArticleFromFavorites(
      slug,
      currentUserId,
    );
    return this.articleService.buildArticleResponse(article);
  }
}