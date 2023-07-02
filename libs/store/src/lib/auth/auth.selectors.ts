import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAuthState } from './auth.types';

export const selectAuthState = createFeatureSelector<IAuthState>('auth');

export const selectAuthError = createSelector(
  selectAuthState,
  (state: IAuthState) => state.error,
);

export const selectAuthUser = createSelector(
  selectAuthState,
  (state: IAuthState) =>
    state.user ?? JSON.parse(localStorage.getItem('user')!) ?? null,
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state: IAuthState) => state.loading,
);
