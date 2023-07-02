// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { UsersService } from '@starter/realworld-oas';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action) =>
        this.usersService
          .usersControllerLogin({
            user: {
              email: action.email,
              password: action.password,
            },
          })
          .pipe(
            map(({ user }) => {
              localStorage.setItem('user', JSON.stringify(user));
              return AuthActions.loginCompleted({ user });
            }),
            catchError(({ error }) =>
              of(AuthActions.loginFailure({ error: error.message })),
            ),
          ),
      ),
    ),
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('user'); // Remove the token from localstorage
        }),
      ),
    { dispatch: false }, // No need to dispatch an action here
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap((action) =>
        this.usersService
          .usersControllerRegister({
            user: {
              email: action.email,
              password: action.password,
              username: action.username,
            },
          })
          .pipe(
            map(({ user }) => AuthActions.registrationCompleted({ user })),
            catchError(({ error }) =>
              of(AuthActions.registerFailure({ error: error.message })),
            ),
          ),
      ),
    ),
  );
}
