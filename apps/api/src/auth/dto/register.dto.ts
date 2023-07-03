import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  Matches,
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
  @Matches(/^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
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
