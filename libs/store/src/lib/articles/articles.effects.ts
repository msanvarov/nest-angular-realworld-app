// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { ArticlesService, TagsService } from '@starter/realworld-oas';

import { selectAuthUser } from '../auth';
import * as ArticleActions from './articles.actions';

@Injectable()
export class ArticlesEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private tagsService: TagsService,
    private store: Store,
  ) {}

  getArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getArticles),
      switchMap((action) =>
        this.articlesService
          .getArticles(
            action.tag,
            action.author,
            action.favorited,
            action.offset || 0,
            action.limit || 10,
          )
          .pipe(
            map((articles) =>
              ArticleActions.getArticlesCompleted({
                articles,
              }),
            ),
            catchError(({ error }) =>
              of(ArticleActions.getArticlesFailure({ error: error.message })),
            ),
          ),
      ),
    ),
  );

  getAuthoredArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getAuthoredArticles),
      withLatestFrom(this.store.select(selectAuthUser)),
      switchMap(([action, authUser]) =>
        this.articlesService
          .getArticles(
            action.tag,
            authUser?.username,
            action.favorited,
            action.offset || 0,
            action.limit || 10,
          )
          .pipe(
            map((articles) =>
              ArticleActions.getAuthoredArticlesCompleted({
                articles,
              }),
            ),
            catchError(({ error }) =>
              of(
                ArticleActions.getAuthoredArticlesFailure({
                  error: error.message,
                }),
              ),
            ),
          ),
      ),
    ),
  );

  getArticleFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getArticleFeed),
      withLatestFrom(this.store.select(selectAuthUser)),
      switchMap(([action, authUser]) => {
        this.articlesService.configuration.apiKeys = {
          Authorization: `Bearer ${authUser?.token}`,
        };
        return this.articlesService
          .getArticlesFeed(action.offset, action.limit)
          .pipe(
            map((articles) =>
              ArticleActions.getArticleFeedCompleted({
                articles,
              }),
            ),
            catchError(({ error }) =>
              of(
                ArticleActions.getArticleFeedFailure({ error: error.message }),
              ),
            ),
          );
      }),
    ),
  );

  getArticleTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getArticleTags),
      switchMap((action) =>
        this.tagsService.getTags().pipe(
          map((tags) =>
            ArticleActions.getArticleTagsCompleted({
              tags: tags.tags,
            }),
          ),
          catchError(({ error }) =>
            of(ArticleActions.getArticleTagsFailure({ error: error.message })),
          ),
        ),
      ),
    ),
  );
}
