import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { TagService } from './tag.service';

@ApiBearerAuth()
@ApiTags('tags')
@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Fetch Tags Request Received' })
  @ApiResponse({ status: 400, description: 'Fetch Tags Request Failed' })
  async getTags() {
    const tags = await this.tagService.getTags();
    return {
      tags: tags.map((tag) => tag.name),
    };
  }
}
