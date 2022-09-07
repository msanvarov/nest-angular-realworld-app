import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

/**
 * Register Dto Class
 */
export class RegisterDto {
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
