// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { UserAndAuthenticationService } from '@starter/realworld-oas';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserAndAuthenticationService,
  ) {}

  editUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.editUser),
      switchMap((action) => {
        return this.userService
          .updateCurrentUser({
            user: action.user,
          })
          .pipe(
            map(({ user }) =>
              UserActions.editUserCompleted({
                user,
              }),
            ),
            catchError(({ error }) =>
              of(UserActions.editUserFailure({ error: error.message })),
            ),
          );
      }),
    ),
  );
}
