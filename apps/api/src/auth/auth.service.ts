import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { UserEntity } from '../users/user.entity';

/**
 * Authentication Service
 */
@Injectable()
export class AuthService {
  /**
   * Time in seconds when the token is to expire
   * @type {number}
   */
  private readonly expiration: number;

  /**
   * Constructor
   * @param {JwtService} jwtService jwt service
   * @param {UsersService} usersService users service
   */
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.expiration = this.configService.get('WEBTOKEN_EXPIRATION_TIME');
  }

  /**
   * Creates a signed jwt token based on User payload
   * @param {UserEntity} param dto to generate token from
   * @returns {Promise<IUserResponseBody>} token body
   */
  createToken({ id, username, roles, email }: UserEntity): string {
    return this.jwtService.sign({
      id,
      username,
      roles,
      email,
    });
  }
}
