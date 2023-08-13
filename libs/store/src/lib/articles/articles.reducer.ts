// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';

import {
  createArticle,
  createArticleCompleted,
  createArticleFailure,
  favouriteArticle,
  favouriteArticleCompleted,
  favouriteArticleFailure,
  getArticle,
  getArticleCompleted,
  getArticleFailure,
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
  article: null,
  feed: null,
  authoredArticles: null,
  lastFavouritedArticle: null,
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
  on(getArticle, (state) => ({ ...state, loading: true, error: null })),
  on(getArticleCompleted, (state, { article }) => ({
    ...state,
    loading: false,
    article,
  })),
  on(getArticleFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: {
      message: error,
      code: ArticlesErrorCodesEnum.GET_ARTICLE_FAILED,
    },
  })),
  on(getArticleFeed, (state) => ({ ...state, loading: true, error: null })),
  on(getArticleTags, (state) => ({ ...state, loading: true, error: null })),
  on(favouriteArticle, (state) => ({ ...state, loading: true, error: null })),
  on(createArticle, (state) => ({ ...state, loading: true, error: null })),
  on(createArticleCompleted, (state, { article }) => ({
    ...state,
    loading: false,
    article,
  })),
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
  on(favouriteArticleCompleted, (state, { slug }) => ({
    ...state,
    loading: false,
    lastFavouritedArticle: slug,
  })),
  on(createArticleFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: {
      message: error,
      code: ArticlesErrorCodesEnum.CREATE_ARTICLE_FAILED,
    },
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
  on(favouriteArticleFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: {
      message: error,
      code: ArticlesErrorCodesEnum.FAVOURITE_ARTICLE_FAILED,
    },
  })),
);
