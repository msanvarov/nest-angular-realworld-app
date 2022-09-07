import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNotEmpty } from 'class-validator';

export class CreateTagDto {
  @ApiProperty()
  @IsAlpha()
  @IsNotEmpty()
  readonly name: string;
}
