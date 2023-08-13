// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

// import { JwtService } from '@starter/core-components';
import { UserAndAuthenticationService } from '@starter/realworld-oas';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private usersService: UserAndAuthenticationService, // private jwtService: JwtService,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action) => {
        return this.usersService
          .login({
            user: {
              email: action.email,
              password: action.password,
            },
          })
          .pipe(
            map(({ user }) => {
              // this.jwtService.persistWebtoken(user.token);
              // this.apiConfiguration.credentials = {
              //   Bearer: user.token,
              // };

              return AuthActions.loginCompleted({ user });
            }),
            catchError(({ error }) =>
              of(AuthActions.loginFailure({ error: error.message })),
            ),
          );
      }),
    ),
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          // this.jwtService.destroyWebtoken();
          // this.apiConfiguration.credentials = {};
        }),
      ),
    { dispatch: false }, // No need to dispatch an action here
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap((action) =>
        this.usersService
          .createUser({
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
