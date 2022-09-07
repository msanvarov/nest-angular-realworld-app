import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsAlphanumeric,
  IsEmail,
  IsFQDN,
  IsNotEmpty,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class UserDto {
  /**
   * Email field
   */
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  /**
   * Username field
   */
  @ApiProperty()
  @IsAlphanumeric()
  @IsNotEmpty()
  readonly username: string;

  /**
   * Bio field
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(255)
  readonly bio: string;

  /**
   * Image field
   * @example https://gravatar.com/avatar/123
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsFQDN()
  readonly image: string;

  /**
   * Password field
   */
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
}

/**
 * Patch User Payload Class
 */
export class PatchUserDto {
  @ApiProperty()
  @Type(() => UserDto)
  @ValidateNested()
  readonly user: UserDto;
}
