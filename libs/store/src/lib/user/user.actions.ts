import { createAction, props } from '@ngrx/store';

import { IUser } from '@starter/api-types';
import { UserDto } from '@starter/realworld-oas';

export const editUser = createAction(
  '[User] Edit User',
  props<{
    user: Partial<UserDto>;
  }>(),
);

export const editUserCompleted = createAction(
  '[User] Edit User Completed',
  props<{ user: IUser }>(),
);
export const editUserFailure = createAction(
  '[User] Edit User Failure',
  props<{
    error: string;
    statusCode?: number;
  }>(),
);
