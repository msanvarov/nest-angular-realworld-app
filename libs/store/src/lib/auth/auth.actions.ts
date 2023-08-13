import { createAction, props } from '@ngrx/store';

import { IUserResponseBody } from '@starter/api-types';
import { LoginUser, NewUser } from '@starter/realworld-oas';

export const login = createAction('[Auth] Login', props<LoginUser>());

export const register = createAction('[Auth] Register', props<NewUser>());

export const logout = createAction('[Auth] Logout');

export const loginCompleted = createAction(
  '[Auth] Login Completed',
  props<{ user: IUserResponseBody | null }>(),
);

export const registrationCompleted = createAction(
  '[Auth] Registration Completed',
  props<{ user: IUserResponseBody | null }>(),
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{
    error: string;
    statusCode?: number;
  }>(),
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{
    error: string;
    statusCode?: number;
  }>(),
);
