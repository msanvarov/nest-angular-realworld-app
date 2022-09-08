import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UsersService } from '../users/users.service';

/**
 * Jwt Strategy Class
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Constructor
   * @param {ConfigService} configService
   * @param {UsersService} usersService
   */
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Token'),
      ignoreExpiration: false,
      secretOrKey: configService.get('WEBTOKEN_ENCRYPTION_KEY'),
      passReqToCallback: true,
    });
  }

  /**
   * Checks if the bearer token is a valid token
   * @param {Record<string, unknown>} jwtPayload validation method for jwt token
   * @returns {Promise<Record<string, unknown>>} a object to be signed
   */
  async validate(request: Request, jwtPayload: Record<string, number>) {
    const { iat, exp, id } = jwtPayload;
    const timeDiff = exp - iat;
    if (timeDiff <= 0) {
      throw new UnauthorizedException();
    }

    const user = await this.usersService.get(id);
    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      user: {
        ...user,
        // Hacks to bind the JWT token to the req.user
        token: request.headers['authorization'].split(' ')[1],
      },
    };
  }
}
