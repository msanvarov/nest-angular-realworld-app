import { createReducer, on } from '@ngrx/store';

import {
  getProfile,
  getProfileCompleted,
  getProfileFailure,
} from './profiles.actions';
import { IProfilesState, ProfilesErrorCodesEnum } from './profiles.types';

const initialState: IProfilesState = {
  profile: null,
  loading: false,
  error: null,
};

export const profilesReducer = createReducer(
  initialState,
  on(getProfile, (state) => ({ ...state, loading: true, error: null })),
  on(getProfileCompleted, (state, { profile }) => ({
    ...state,
    loading: false,
    profile,
  })),
  on(getProfileFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: {
      message: error,
      code: ProfilesErrorCodesEnum.GET_PROFILE_FAILED,
    },
  })),
);
