/**
 *
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
  gravatar?: string;
  roles?: {
    role: UserRolesEnum;
  }[];
  name?: string;
  authenticated: boolean;
  token: string;
}

export enum ApiAuthRoutesEnum {
  LOGIN = '/api/v1/auth/login',
  REGISTER = '/api/v1/auth/register',
}

export enum ApiUsersRoutesEnum {
  GET_USER = '/api/v1/users/user',
  // username is the token to be replaced with a username
  GET_USER_BY_USERNAME = '/api/v1/users/{{username}}',
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
