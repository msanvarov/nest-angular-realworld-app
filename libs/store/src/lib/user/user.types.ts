import { User } from '@starter/realworld-oas';

export enum UserErrorCodesEnum {
  EDIT_USER_FAILED = 'EDIT_USER_FAILED',
}

export interface IUserState {
  user: User | null;
  loading: boolean;
  error: {
    message: string;
    code: UserErrorCodesEnum;
  } | null;
}
