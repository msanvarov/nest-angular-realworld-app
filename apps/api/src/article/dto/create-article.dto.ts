import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';

export class ArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
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
