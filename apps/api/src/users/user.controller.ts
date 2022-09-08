import { Body, Controller, Get, Put, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { IUser } from '@starter/api-types';

import { PatchUserDto } from './dto/patch-user.dto';
import { UserParam } from './user.decorator';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}
  /**
   * Retrieves current authenticated user
   * @returns {IUser} queried user data
   */
  @Get()
  getUser(@Request() req): IUser {
    return req.user as IUser;
  }

  /**
   * Edit a user
   * @param {RegisterPayload} payload
   * @returns {Promise<UserEntity>} mutated user data
   */
  @Put()
  @ApiResponse({ status: 200, description: 'Put User Request Received' })
  @ApiResponse({ status: 400, description: 'Put User Request Failed' })
  async editUser(
    @UserParam('id') userId: number,
    @Body() payload: PatchUserDto,
  ): Promise<UserEntity> {
    return this.usersService.edit(userId, payload.user);
  }
}
