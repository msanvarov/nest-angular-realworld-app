import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  ValidateNested,
} from 'class-validator';

/**
 * Login Dto Class
 */
export class UserLoginDto {
  /**
   * Email field
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  /**
   * Password field
   */
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
}

export class LoginDto {
  @ApiProperty()
  @Type(() => UserLoginDto)
  @ValidateNested()
  readonly user: UserLoginDto;
}
