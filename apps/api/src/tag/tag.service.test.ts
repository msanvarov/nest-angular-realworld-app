import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

import { TagEntity } from './tag.entity';
import { TagService } from './tag.service';

describe('TagService', () => {
  let service: TagService;

  const mockedTagRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
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

    service = module.get<TagService>(TagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
