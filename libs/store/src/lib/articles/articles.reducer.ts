// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';

import {
  getArticleFeed,
  getArticleFeedCompleted,
  getArticleFeedFailure,
  getArticleTags,
  getArticleTagsCompleted,
  getArticleTagsFailure,
  getArticles,
  getArticlesCompleted,
  getArticlesFailure,
  getAuthoredArticles,
  getAuthoredArticlesCompleted,
  getAuthoredArticlesFailure,
} from './articles.actions';
import { ArticlesErrorCodesEnum, IArticlesState } from './articles.types';

const initialState: IArticlesState = {
  articles: null,
  feed: null,
  authoredArticles: null,
  tags: [],
  loading: false,
  error: null,
};

export const articlesReducer = createReducer(
  initialState,
  on(getArticles, (state) => ({ ...state, loading: true, error: null })),
  on(getAuthoredArticles, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(getArticleFeed, (state) => ({ ...state, loading: true, error: null })),
  on(getArticleTags, (state) => ({ ...state, loading: true, error: null })),
  on(getArticlesCompleted, (state, { articles }) => ({
    ...state,
    loading: false,
    articles,
  })),
  on(getAuthoredArticlesCompleted, (state, { articles }) => ({
    ...state,
    loading: false,
    authoredArticles: articles,
  })),
  on(getArticleFeedCompleted, (state, { articles }) => ({
    ...state,
    loading: false,
    feed: articles,
  })),
  on(getArticleTagsCompleted, (state, { tags }) => ({
    ...state,
    loading: false,
    tags,
  })),
  on(getArticlesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: {
      message: error,
      code: ArticlesErrorCodesEnum.GET_ARTICLES_FAILED,
    },
  })),
  on(getAuthoredArticlesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: {
      message: error,
      code: ArticlesErrorCodesEnum.GET_AUTHORED_ARTICLES_FAILED,
    },
  })),
  on(getArticleFeedFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: {
      message: error,
      code: ArticlesErrorCodesEnum.GET_ARTICLE_FEED_FAILED,
    },
  })),
  on(getArticleTagsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: {
      message: error,
      code: ArticlesErrorCodesEnum.GET_ARTICLE_TAGS_FAILED,
    },
  })),
);