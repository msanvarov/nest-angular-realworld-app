import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CaslFactory } from '../casl/casl.factory';
import { TagEntity } from '../tag/tag.entity';
import { TagService } from '../tag/tag.service';
import { UserEntity } from '../users/user.entity';
import { ArticleController } from './article.controller';
import { ArticleEntity } from './article.entity';
import { ArticleService } from './article.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity, UserEntity, TagEntity])],
  controllers: [ArticleController],
  providers: [ArticleService, CaslFactory, TagService],
})
export class ArticleModule {}
