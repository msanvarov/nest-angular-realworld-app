import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  MinLength,
  ValidateNested,
} from 'class-validator';

/**
 * Register Dto Class
 */
export class UserRegistrationDto {
  /**
   * Email field
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  /**
   * Username field
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsAlphanumeric()
  readonly username: string;

  /**
   * Password field
   */
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
}

export class RegisterDto {
  @ApiProperty()
  @Type(() => UserRegistrationDto)
  @ValidateNested()
  readonly user: UserRegistrationDto;
}
