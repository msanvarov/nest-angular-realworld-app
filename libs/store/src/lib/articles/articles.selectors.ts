import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IArticlesState } from './articles.types';

export const selectArticlesState =
  createFeatureSelector<IArticlesState>('articles');

export const selectArticlesError = createSelector(
  selectArticlesState,
  (state: IArticlesState) => state.error,
);

export const selectArticle = createSelector(
  selectArticlesState,
  (state: IArticlesState) => state.article,
);

export const selectArticles = createSelector(
  selectArticlesState,
  (state: IArticlesState) => state.articles,
);
export const selectArticleFeed = createSelector(
  selectArticlesState,
  (state: IArticlesState) => state.feed,
);

export const selectArticleTags = createSelector(
  selectArticlesState,
  (state: IArticlesState) => state.tags,
);

export const selectAuthoredArticles = createSelector(
  selectArticlesState,
  (state: IArticlesState) => state.authoredArticles,
);

export const selectLastFavouritedArticle = createSelector(
  selectArticlesState,
  (state: IArticlesState) => state.lastFavouritedArticle,
);
