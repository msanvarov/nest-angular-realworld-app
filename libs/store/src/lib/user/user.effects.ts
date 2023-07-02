// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { IUser } from '@starter/api-types';
import { UserDto, UserService } from '@starter/realworld-oas';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  editUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.editUser),
      switchMap((action) =>
        this.userService
          .userControllerEditUser({
            user: action.user as unknown as UserDto,
          })
          .pipe(
            map(({ user }: { user: IUser }) =>
              UserActions.editUserCompleted({
                user,
              }),
            ),
            catchError(({ error }) =>
              of(UserActions.editUserFailure({ error: error.message })),
            ),
          ),
      ),
    ),
  );
}
