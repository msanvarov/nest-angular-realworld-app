import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ArticlesQueryParams {
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  tag: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  author: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  favorited: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  limit: number;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  offset: number;
}
