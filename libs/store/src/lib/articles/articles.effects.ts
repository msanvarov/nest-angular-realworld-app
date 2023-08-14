// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

// import { JwtService } from '@starter/core-components';
import {
  ArticlesService,
  FavoritesService,
  TagsService,
} from '@starter/realworld-oas';

import { selectAuthUser } from '../auth';
import * as ArticleActions from './articles.actions';

@Injectable()
export class ArticlesEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService,
    private tagsService: TagsService,
    private favouritesService: FavoritesService,
    // private jwtService: JwtService,
    private store: Store,
  ) {
    // Listen to token changes from the store and update the services configuration
    this.store.select(selectAuthUser).subscribe((user) => {
      const tokenPayload = user?.token;
      if (tokenPayload) {
        this.articlesService.configuration.credentials = {
          Bearer: tokenPayload,
        };
        this.favouritesService.configuration.credentials = {
          Bearer: tokenPayload,
        };
      }
    });
  }

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

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getArticle),
      switchMap((action) => {
        return this.articlesService.getArticle(action.slug).pipe(
          map(({ article }) =>
            ArticleActions.getArticleCompleted({
              article,
            }),
          ),
          catchError(({ error }) =>
            of(ArticleActions.getArticleFailure({ error: error.message })),
          ),
        );
      }),
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
      switchMap((action) => {
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

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.createArticle),
      switchMap((action) => {
        return this.articlesService
          .createArticle({
            article: {
              title: action.title,
              description: action.description,
              body: action.body,
              tagList: action.tagList,
            },
          })
          .pipe(
            map(({ article }) =>
              ArticleActions.createArticleCompleted({
                article,
              }),
            ),
            catchError(({ error }) =>
              of(
                ArticleActions.createArticleFailure({
                  error: error.message,
                }),
              ),
            ),
          );
      }),
    ),
  );

  favoriteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.favouriteArticle),
      switchMap((action) => {
        return this.favouritesService.createArticleFavorite(action.slug).pipe(
          map(({ article }) =>
            ArticleActions.favouriteArticleCompleted({
              slug: article.slug,
            }),
          ),
          catchError(({ error }) => {
            return of(
              ArticleActions.favouriteArticleFailure({
                error: error.message,
              }),
            );
          }),
        );
      }),
    ),
  );

  unfavoriteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.unfavouriteArticle),
      switchMap((action) => {
        return this.favouritesService.deleteArticleFavorite(action.slug).pipe(
          map(({ article }) =>
            ArticleActions.unfavouriteArticleCompleted({
              slug: article.slug,
            }),
          ),
          catchError(({ error }) =>
            of(
              ArticleActions.unfavouriteArticleFailure({
                error: error.message,
              }),
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
