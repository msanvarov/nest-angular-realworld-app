import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';

import { ProfileService } from '@starter/realworld-oas';

import { selectAuthUser } from '../auth';
import * as ProfileActions from './profiles.actions';

@Injectable()
export class ProfilesEffects {
  constructor(
    private actions$: Actions,
    private profilesService: ProfileService,
    // private jwtService: JwtService,
    private store: Store,
  ) {
    // Listen to token changes from the store and update the services configuration
    this.store.select(selectAuthUser).subscribe((user) => {
      const tokenPayload = user?.token;
      if (tokenPayload) {
        this.profilesService.configuration.credentials = {
          Bearer: tokenPayload,
        };
      }
    });
  }

  getProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.getProfile),
      switchMap((action) => {
        return this.profilesService.getProfileByUsername(action.username).pipe(
          map(({ profile }) =>
            ProfileActions.getProfileCompleted({
              profile,
            }),
          ),
          catchError(({ error }) =>
            of(ProfileActions.getProfileFailure({ error: error.message })),
          ),
        );
      }),
    ),
  );
}
