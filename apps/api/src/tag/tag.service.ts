import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Repository } from 'typeorm';
import { Logger } from 'winston';

import { CreateTagDto } from './dto/create-tag.dto';
import { TagEntity } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async getTags(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }

  async createTag(tag: CreateTagDto): Promise<TagEntity> {
    try {
      const article = new TagEntity();
      Object.assign(article, tag);
      return await this.tagRepository.save(article);
    } catch (error) {
      // Error case is likely a duplicate tag which is fine to be ignored
      this.logger.debug(`Tag ${tag.name} exists, so not creating duplicate`);
    }
  }
}
