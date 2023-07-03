import { createAction, props } from '@ngrx/store';

import { GetArticlesFeed200Response } from '@starter/realworld-oas';

export const getArticles = createAction(
  '[Articles] Get Articles',
  props<{
    tag?: string;
    author?: string;
    favorited?: string;
    limit?: number;
    offset?: number;
  }>(),
);

export const getAuthoredArticles = createAction(
  '[Articles] Get Authored Articles',
  props<{
    tag?: string;
    favorited?: string;
    limit?: number;
    offset?: number;
  }>(),
);

export const getArticleFeed = createAction(
  '[Articles] Get Article Feed',
  props<{
    limit?: number;
    offset?: number;
  }>(),
);

export const getArticleTags = createAction('[Articles] Get Article Tags');

export const getArticleTagsCompleted = createAction(
  '[Articles] Get Article Tags Completed',
  props<{
    tags: string[];
  }>(),
);

export const getArticleTagsFailure = createAction(
  '[Articles] Get Article Tags Failure',
  props<{
    error: string;
    statusCode?: number;
  }>(),
);

export const getArticleFeedCompleted = createAction(
  '[Articles] Get Article Feed Completed',
  props<{
    articles: GetArticlesFeed200Response | null;
  }>(),
);

export const getArticlesCompleted = createAction(
  '[Articles] Get Articles Completed',
  props<{ articles: GetArticlesFeed200Response | null }>(),
);

export const getAuthoredArticlesCompleted = createAction(
  '[Articles] Get Authored Articles Completed',
  props<{ articles: GetArticlesFeed200Response | null }>(),
);

export const getArticleFeedFailure = createAction(
  '[Articles] Get Article Feed Failure',
  props<{
    error: string;
    statusCode?: number;
  }>(),
);

export const getArticlesFailure = createAction(
  '[Articles] Get Articles Failure',
  props<{
    error: string;
    statusCode?: number;
  }>(),
);

export const getAuthoredArticlesFailure = createAction(
  '[Articles] Get Authored Articles Failure',
  props<{
    error: string;
    statusCode?: number;
  }>(),
);