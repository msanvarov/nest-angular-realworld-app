import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IUserState } from './user.types';

export const selectUserState = createFeatureSelector<IUserState>('user');

export const selectUserError = createSelector(
  selectUserState,
  (state: IUserState) => state.error,
);

export const selectUser = createSelector(
  selectUserState,
  (state: IUserState) => state.user,
);
