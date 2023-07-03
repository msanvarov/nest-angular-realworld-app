import { GetArticlesFeed200Response } from '@starter/realworld-oas';

export enum ArticlesErrorCodesEnum {
  GET_ARTICLES_FAILED = 'GET_ARTICLES_FAILED',
  GET_ARTICLE_TAGS_FAILED = 'GET_ARTICLE_TAGS_FAILED',
  GET_ARTICLE_FEED_FAILED = 'GET_ARTICLE_FEED_FAILED',
  GET_AUTHORED_ARTICLES_FAILED = 'GET_AUTHORED_ARTICLES_FAILED',
}

export interface IArticlesState {
  articles: GetArticlesFeed200Response | null;
  feed: GetArticlesFeed200Response | null;
  authoredArticles: GetArticlesFeed200Response | null;
  tags: string[] | null;
  loading: boolean;
  error: {
    message: string;
    code: ArticlesErrorCodesEnum;
  } | null;
}
