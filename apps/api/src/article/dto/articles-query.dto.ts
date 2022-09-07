import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

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
  @IsInt()
  @Min(1)
  @Max(100)
  limit: number;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  offset: number;
}
