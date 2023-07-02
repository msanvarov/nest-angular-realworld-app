// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';

import {
  login,
  loginCompleted,
  loginFailure,
  register,
  registerFailure,
  registrationCompleted,
} from './auth.actions';
import { AuthErrorCodesEnum, IAuthState } from './auth.types';

const initialState: IAuthState = {
  user: null,
  error: null,
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, loading: true, error: null })),
  on(register, (state) => ({ ...state, loading: true, error: null })),
  on(loginCompleted, (state, { user }) => ({ ...state, loading: false, user })),
  on(registrationCompleted, (state, { user }) => ({
    ...state,
    loading: false,
    user,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: {
      message: error,
      code: AuthErrorCodesEnum.LOGIN_FAILURE,
    },
  })),
  on(registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: {
      message: error,
      code: AuthErrorCodesEnum.REGISTRATION_FAILURE,
    },
  })),
);
