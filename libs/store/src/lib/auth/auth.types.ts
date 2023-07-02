import { IUserResponseBody } from '@starter/api-types';

export enum AuthErrorCodesEnum {
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  REGISTRATION_FAILURE = 'REGISTRATION_FAILURE',
}

export interface IAuthState {
  user: IUserResponseBody | null;
  loading: boolean;
  error: {
    message: string;
    code: AuthErrorCodesEnum;
  } | null;
}
