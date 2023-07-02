// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';

import { editUser, editUserCompleted, editUserFailure } from './user.actions';
import { IUserState, UserErrorCodesEnum } from './user.types';

const initialState: IUserState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(editUser, (state) => ({ ...state, loading: true, error: null })),
  on(editUserCompleted, (state, { user }) => ({
    ...state,
    loading: false,
    user,
  })),
  on(editUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: {
      message: error,
      code: UserErrorCodesEnum.EDIT_USER_FAILED,
    },
  })),
);
