import { Profile } from '@starter/realworld-oas';

export enum ProfilesErrorCodesEnum {
  GET_PROFILE_FAILED = 'GET_PROFILE_FAILED',
}

export interface IProfilesState {
  profile: Profile | null;
  loading: boolean;
  error: {
    message: string;
    code: ProfilesErrorCodesEnum;
  } | null;
}
