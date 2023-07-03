import { createAction, props } from '@ngrx/store';

import { UpdateUser, User } from '@starter/realworld-oas';

export const editUser = createAction(
  '[User] Edit User',
  props<{
    user: UpdateUser;
  }>(),
);

export const editUserCompleted = createAction(
  '[User] Edit User Completed',
  props<{ user: User }>(),
);
export const editUserFailure = createAction(
  '[User] Edit User Failure',
  props<{
    error: string;
    statusCode?: number;
  }>(),
);
