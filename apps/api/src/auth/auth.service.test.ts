import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';

import { UserRolesEnum } from '@starter/api-types';

import { UserRoles } from '../users/user-role.entity';
import { UserEntity } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';

const user: UserEntity = plainToClass(UserEntity, {
  id: 1,
  email: 'test@user.com',
  roles: [
    {
      id: 1,
      role: UserRolesEnum.SUDO,
      user: 1,
    },
  ],
});

const userRole: UserRoles = plainToClass(UserRoles, {
  id: 1,
  role: UserRolesEnum.SUDO,
  user,
} as UserRoles);
describe('AuthService', () => {
  let service: AuthService;

  // Mock Repositories
  const mockedUserRepository = {
    createQueryBuilder: jest.fn().mockResolvedValue(user),
  };
  const mockedUserRolesRepository = {
    save: jest.fn().mockResolvedValue([userRole]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        JwtService,
        UsersService,
        ConfigService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: mockedUserRepository,
        },
        {
          provide: getRepositoryToken(UserRoles),
          useValue: mockedUserRolesRepository,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
