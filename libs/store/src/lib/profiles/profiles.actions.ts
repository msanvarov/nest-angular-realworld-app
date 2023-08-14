import { createAction, props } from '@ngrx/store';

import { Profile } from '@starter/realworld-oas';

export const getProfile = createAction(
  '[Profiles] Get Profile',
  props<{
    username: string;
  }>(),
);

export const getProfileCompleted = createAction(
  '[Profiles] Get Profile Completed',
  props<{
    profile: Profile;
  }>(),
);

export const getProfileFailure = createAction(
  '[Profiles] Get Profile Failure',
  props<{
    error: string;
    statusCode?: number;
  }>(),
);
