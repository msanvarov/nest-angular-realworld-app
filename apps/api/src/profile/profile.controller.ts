import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CheckPolicies } from '../casl/check-policies.decorator';
import { PoliciesGuard } from '../casl/policies.guard';
import { PatchUserPolicyHandler } from '../casl/policy-handlers';
import { UserParam } from '../users/user.decorator';
import { ProfileService } from './profile.service';

@ApiBearerAuth()
@ApiTags('profiles')
@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':username')
  @ApiResponse({
    status: 201,
    description: 'Get Profile by Username Request Completed',
  })
  @ApiResponse({
    status: 400,
    description: 'Get Profile by Username Bad Request',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getProfile(
    @UserParam('id') currentUserId: number,
    @Param('username') profileUsername: string,
  ) {
    const profile = await this.profileService.getProfile(
      currentUserId,
      profileUsername,
    );
    return this.profileService.buildProfileResponse(profile);
  }

  @Post(':username/follow')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new PatchUserPolicyHandler())
  @ApiResponse({
    status: 200,
    description: 'Follow Profile Request Completed',
  })
  @ApiResponse({
    status: 400,
    description: 'Follow Profile Bad Request',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async followProfile(
    @UserParam('id') currentUserId: number,
    @Param('username') profileUsername: string,
  ) {
    const profile = await this.profileService.followProfile(
      currentUserId,
      profileUsername,
    );
    return this.profileService.buildProfileResponse(profile);
  }

  @Delete(':username/follow')
  @UseGuards(PoliciesGuard)
  @CheckPolicies(new PatchUserPolicyHandler())
  @ApiResponse({
    status: 200,
    description: 'Unfollow Profile Request Completed',
  })
  @ApiResponse({
    status: 400,
    description: 'Unfollow Profile Bad Request',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async unfollowProfile(
    @UserParam('id') currentUserId: number,
    @Param('username') profileUsername: string,
  ) {
    const profile = await this.profileService.unfollowProfile(
      currentUserId,
      profileUsername,
    );
    return this.profileService.buildProfileResponse(profile);
  }
}
