// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { IArticlesResponseBody } from '@starter/api-types';
import { ArticlesService, TagsService } from '@starter/realworld-oas';

import * as ArticleActions from './articles.actions';

@Injectable()
export class ArticlesEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private tagsService: TagsService,
  ) {}

  getArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getArticles),
      switchMap((action) =>
        this.articlesService
          .articleControllerGetArticles(
            undefined,
            undefined,
            undefined,
            action.limit || 10,
            action.offset || 0,
          )
          .pipe(
            map((articles: IArticlesResponseBody) =>
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

  getArticleFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getArticleFeed),
      switchMap((action) =>
        this.articlesService
          .articleControllerGetFeed(action.limit, action.offset)
          .pipe(
            map((articles: IArticlesResponseBody) =>
              ArticleActions.getArticleFeedCompleted({
                articles,
              }),
            ),
            catchError(({ error }) =>
              of(
                ArticleActions.getArticleFeedFailure({ error: error.message }),
              ),
            ),
          ),
      ),
    ),
  );

  getArticleTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getArticleTags),
      switchMap((action) =>
        this.tagsService.tagControllerGetTags().pipe(
          map((tags: { tags: string[] }) =>
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
