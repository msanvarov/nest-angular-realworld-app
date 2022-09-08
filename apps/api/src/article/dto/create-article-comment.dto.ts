import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';

export class ArticleCommentDto {
  @ApiProperty()
  @IsNotEmpty()
  body: string;
}

export class CreateArticleCommentDto {
  @ApiProperty()
  @Type(() => ArticleCommentDto)
  @ValidateNested()
  comment: ArticleCommentDto;
}
