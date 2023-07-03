import {
  BadRequestException,
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as crypto from 'crypto';
import { url } from 'gravatar';
import { Repository } from 'typeorm';

import { IGenericMessageBody } from '@starter/api-types';

import { LoginDto, UserLoginDto } from '../auth/dto/login.dto';
import { UserRegistrationDto } from '../auth/dto/register.dto';
import { UserDto } from './dto/patch-user.dto';
import { UserRoles } from './user-role.entity';
import { UserEntity } from './user.entity';

/**
 * Users Service
 */
@Injectable()
export class UsersService {
  /**
   * Constructor
   * @param {Repository<UserEntity>} userRepository
   * @param {Repository<UserRoles>} rolesRepository
   */
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(UserRoles)
    private readonly userRolesRepository: Repository<UserRoles>,
  ) {}

  /**
   * Fetches user from database by UUID
   * @param {number} id
   * @returns {Promise<UserEntity>} data from queried user
   */
  get(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { id }, relations: ['roles'] });
  }

  /**
   * Fetches user from database by username
   * @param {string} username
   * @returns {Promise<UserEntity>} data from queried user
   */
  getByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOneBy({ username });
  }

  /**
   * Fetches user by username and hashed password
   * @param {string} email
   * @param {string} password
   * @returns {Promise<UserEntity>} data from queried user
   */
  getUserByEmailAndPass(email: string, password: string): Promise<UserEntity> {
    return this.userRepository
      .createQueryBuilder('users')
      .where('users.email = :email and users.password = :password')
      .setParameter('email', email)
      .setParameter(
        'password',
        crypto.createHmac('sha256', password).digest('hex'),
      )
      .getOne();
  }

  /**
   * Create a user with RegisterPayload fields
   * @param {UserRegistrationDto} payload user payload
   * @returns {Promise<UserEntity>} data from the created user
   */
  async create(payload: UserRegistrationDto): Promise<UserEntity> {
    const user = await this.getByUsername(payload.username);

    if (user) {
      throw new NotAcceptableException(
        'The account with the provided username currently exists. Please choose another one.',
      );
    }

    // Remark: Default role is set to sudo
    const roles: UserRoles[] = [new UserRoles()];
    await this.userRolesRepository.save(roles);

    return this.userRepository.save(
      this.userRepository.create({
        ...payload,
        roles,
        image: url(payload.email, {
          protocol: 'https',
          s: '200',
          r: 'pg',
        }),
      }),
    );
  }

  /**
   * Edit user data
   * @param {Partial<UserDto>} payload
   * @returns {Promise<UserEntity>} mutated user data
   */
  async edit(userId: number, payload: Partial<UserDto>): Promise<UserEntity> {
    const user = await this.get(userId);
    if (user) {
      Object.keys(payload).forEach((key) => {
        if (key === 'password') {
          key = crypto.createHmac('sha256', key).digest('hex');
        }
        user[key] = payload[key];
      });
      return this.userRepository.save(user);
    } else {
      throw new BadRequestException(
        'The user with that username does not exist in the system. Please try another username.',
      );
    }
  }

  /**
   * Validates whether or not the user exists in the database
   * @param {LoginDto} param login payload to authenticate with
   * @returns {Promise<UserEntity>} registered user
   */
  async validateUser({ email, password }: UserLoginDto): Promise<UserEntity> {
    const user = await this.getUserByEmailAndPass(email, password);

    if (!user) {
      throw new UnauthorizedException(
        'Could not authenticate. Please try again',
      );
    }
    return user;
  }

  /**
   * Delete user given a username
   * @param {string} username
   * @returns {Promise<IGenericMessageBody>} whether or not the delete operation was completed
   */
  async delete(username: string): Promise<IGenericMessageBody> {
    const deleted = await this.userRepository.delete({ username });
    if (deleted.affected === 1) {
      return { message: `Deleted ${username} from records` };
    } else {
      throw new BadRequestException(
        `Failed to delete a user by the name of ${username}.`,
      );
    }
  }
}
