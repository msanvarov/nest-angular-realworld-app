import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

import { FollowEntity } from '../profile/follow.entity';
import { TagEntity } from '../tag/tag.entity';
import { TagService } from '../tag/tag.service';
import { UserEntity } from '../users/user.entity';
import { ArticleEntity } from './article.entity';
import { ArticleService } from './article.service';
import { CommentEntity } from './comment.entity';

describe('ArticleService', () => {
  let service: ArticleService;

  const mockedArticleRepository = {};

  const mockedUserRepository = {};

  const mockedFollowRepository = {};

  const mockedCommentRepository = {};

  const mockedTagRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticleService,
        {
          provide: getRepositoryToken(ArticleEntity),
          useValue: mockedArticleRepository,
        },
        {
          provide: getRepositoryToken(UserEntity),
          useValue: mockedUserRepository,
        },
        {
          provide: getRepositoryToken(FollowEntity),
          useValue: mockedFollowRepository,
        },
        {
          provide: getRepositoryToken(CommentEntity),
          useValue: mockedCommentRepository,
        },
        TagService,
        {
          provide: getRepositoryToken(TagEntity),
          useValue: mockedTagRepository,
        },
        {
          provide: WINSTON_MODULE_PROVIDER,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ArticleService>(ArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
