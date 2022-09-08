import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class ArticleDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  body: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString({ each: true })
  tagList?: string[];
}

export class CreateArticleDto {
  @ApiProperty()
  @Type(() => ArticleDto)
  @ValidateNested()
  article: ArticleDto;
}
