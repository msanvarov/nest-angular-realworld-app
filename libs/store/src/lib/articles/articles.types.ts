import { IArticlesResponseBody } from '@starter/api-types';

export enum ArticlesErrorCodesEnum {
  GET_ARTICLES_FAILED = 'GET_ARTICLES_FAILED',
  GET_ARTICLE_TAGS_FAILED = 'GET_ARTICLE_TAGS_FAILED',
  GET_ARTICLE_FEED_FAILED = 'GET_ARTICLE_FEED_FAILED',
}

export interface IArticlesState {
  articles: IArticlesResponseBody | null;
  authoredArticles: IArticlesResponseBody | null;
  tags: string[] | null;
  loading: boolean;
  error: {
    message: string;
    code: ArticlesErrorCodesEnum;
  } | null;
}
