import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsFQDN,
  IsOptional,
  Matches,
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
  @IsOptional()
  readonly email: string;

  /**
   * Username field
   */
  @ApiProperty()
  @Matches(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
  @IsOptional()
  readonly username: string;

  /**
   * Bio field
   */
  @ApiProperty()
  @MaxLength(255)
  @IsOptional()
  readonly bio: string;

  /**
   * Image field
   * @example https://gravatar.com/avatar/123
   */
  @ApiProperty()
  @IsFQDN()
  @IsOptional()
  readonly image: string;

  /**
   * Password field
   */
  @ApiProperty()
  @MinLength(8)
  @IsOptional()
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
