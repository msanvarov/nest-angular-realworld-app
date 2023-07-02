import { IUser } from '@starter/api-types';

export enum UserErrorCodesEnum {
  EDIT_USER_FAILED = 'EDIT_USER_FAILED',
}

export interface IUserState {
  user: IUser | null;
  loading: boolean;
  error: {
    message: string;
    code: UserErrorCodesEnum;
  } | null;
}
