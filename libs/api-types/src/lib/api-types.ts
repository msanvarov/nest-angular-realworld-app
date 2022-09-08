export const GLOBAL_API_PREFIX = '/api';

export const ApiAuthRoutes = {
  LOGIN: GLOBAL_API_PREFIX + '/auth/login',
  REGISTER: GLOBAL_API_PREFIX + '/auth/register',
};

export const ApiUsersRoutes = {
  GET_USER: GLOBAL_API_PREFIX + '/users/user',
  // username is the token to be replaced with a username
  GET_USER_BY_USERNAME: GLOBAL_API_PREFIX + '/users/{{username}}',
};

/**
 * Default response type for api calls
 */
export interface IMessage {
  message: string;
}

/**
 * Models a typical Login/Register route return body
 */
export interface IUserResponseBody {
  /**
   * The Bearer token
   */
  token: string;
  email: string;
  username: string;
  bio: string;
  image: string;
}

/**
 * Models a typical response for a crud operation
 */
export interface IGenericMessageBody {
  /**
   * Status message to return
   */
  message: string;
}

export enum UserRolesEnum {
  DEFAULT = 'DEFAULT',
  SUDO = 'SUDO',
}

export enum UserActionsEnum {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export interface IUser {
  username: string;
  email: string;
  bio: string;
  image?: string;
  roles?: {
    role: UserRolesEnum;
  }[];
  authenticated: boolean;
  token: string;
}

export interface IAuthRegisterPayload {
  email: string;
  username: string;
  name: string;
  password: string;
}

export interface IArticle {
  id: number;
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  tagList: string[];
  favoritesCount: number;
  // Remark author: UserEntity; But UserEntity is not exported
  author: unknown;
}

export interface IArticlesResponseBody {
  articles: IArticle[];
  articlesCount: number;
}

export interface IArticleResponseBody {
  article: IArticle;
}

export interface IProfile extends IUser {
  following: boolean;
}
