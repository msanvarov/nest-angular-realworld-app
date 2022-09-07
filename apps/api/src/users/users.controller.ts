import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { IGenericMessageBody, IUserResponseBody } from '@starter/api-types';

import { AuthService } from '../auth/auth.service';
import { LoginDto } from '../auth/dto/login.dto';
import { RegisterDto } from '../auth/dto/register.dto';
import { Public } from '../auth/public.decorator';
import { CheckPolicies } from '../casl/check-policies.decorator';
import { PoliciesGuard } from '../casl/policies.guard';
import { DeleteUserPolicyHandler } from '../casl/policy-handlers';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';

/**
 * Users Controller
 */
@ApiBearerAuth()
@ApiTags('users')
@Controller('v1/users')
export class UsersController {
  /**
   * Constructor
   * @param {AuthService} authService authentication service
   * @param usersService
   */
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  /**
   * Authentication route to register
   * @param {RegisterDto} payload the registration dto
   */
  @Public()
  @Post()
  @ApiResponse({ status: 201, description: 'Registration Completed' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async register(
    @Body() payload: RegisterDto,
  ): Promise<Record<string, IUserResponseBody>> {
    const user = await this.usersService.create(payload);
    return {
      user: {
        email: user.email,
        token: this.authService.createToken(user),
        username: user.username,
        bio: user.bio,
        image: user.image,
      },
    };
  }

  /**
   * Login route to validate and create tokens for users
   * @param {LoginDto} payload the login dto
   */
  @Public()
  @Post('login')
  @ApiResponse({ status: 201, description: 'Login Completed' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async login(
    @Body() payload: LoginDto,
  ): Promise<Record<string, IUserResponseBody>> {
    const user = await this.usersService.validateUser(payload);
    return {
      user: {
        email: user.email,
        token: this.authService.createToken(user),
        username: user.username,
        bio: user.bio,
        image: user.image,
      },
    };
  }

  /**
   * Retrieves a particular user
   * @param username the user given username to fetch
   * @returns {Promise<UserEntity>} queried user data
   */
  @Get(':username')
  @ApiResponse({ status: 200, description: 'Fetch User Request Received' })
  @ApiResponse({ status: 400, description: 'Fetch User Request Failed' })
  async getUserByUsername(
    @Param('username') username: string,
  ): Promise<UserEntity> {
    const user = await this.usersService.getByUsername(username);
    if (!user) {
      throw new BadRequestException(
        'The user with that username could not be found.',
      );
    }
    return user;
  }

  /**
   * Removes a user from the database
   * @param {string} username the username to remove
   * @returns {Promise<IGenericMessageBody>} whether or not the user has been deleted
   */
  @Delete(':username')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new DeleteUserPolicyHandler())
  @ApiResponse({ status: 200, description: 'Delete User Request Received' })
  @ApiResponse({ status: 400, description: 'Delete User Request Failed' })
  async deleteUserByUsername(
    @Param('username') username: string,
  ): Promise<IGenericMessageBody> {
    return this.usersService.delete(username);
  }
}
