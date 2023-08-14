import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IProfilesState } from './profiles.types';

export const selectProfilesState =
  createFeatureSelector<IProfilesState>('profiles');

export const selectProfile = createSelector(
  selectProfilesState,
  (state: IProfilesState) => state.profile,
);

export const selectProfilesError = createSelector(
  selectProfilesState,
  (state: IProfilesState) => state.error,
);
