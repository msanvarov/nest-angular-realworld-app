import { Article, GetArticlesFeed200Response } from '@starter/realworld-oas';

export enum ArticlesErrorCodesEnum {
  CREATE_ARTICLE_FAILED = 'CREATE_ARTICLE_FAILED',
  GET_ARTICLES_FAILED = 'GET_ARTICLES_FAILED',
  GET_ARTICLE_TAGS_FAILED = 'GET_ARTICLE_TAGS_FAILED',
  GET_ARTICLE_FEED_FAILED = 'GET_ARTICLE_FEED_FAILED',
  GET_ARTICLE_FAILED = 'GET_ARTICLE_FAILED',
  GET_AUTHORED_ARTICLES_FAILED = 'GET_AUTHORED_ARTICLES_FAILED',
  FAVOURITE_ARTICLE_FAILED = 'FAVOURITE_ARTICLE_FAILED',
}

export interface IArticlesState {
  articles: GetArticlesFeed200Response | null;
  article: Article | null;
  feed: GetArticlesFeed200Response | null;
  authoredArticles: GetArticlesFeed200Response | null;
  lastFavouritedArticle: string | null;
  tags: string[] | null;
  loading: boolean;
  error: {
    message: string;
    code: ArticlesErrorCodesEnum;
  } | null;
}
