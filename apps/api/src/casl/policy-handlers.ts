import { UserActionsEnum } from '@starter/api-types';

import { ArticleEntity } from '../article/article.entity';
import { UserEntity } from '../users/user.entity';
import { AppAbility } from './casl.factory';

interface IPolicyHandler {
  handle(ability: AppAbility): boolean;
}

type PolicyHandlerCallback = (ability: AppAbility) => boolean;

export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;

// Policy Handlers

export class PatchUserPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility): boolean {
    return ability.can(UserActionsEnum.Update, UserEntity);
  }
}

export class DeleteUserPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(UserActionsEnum.Delete, UserEntity);
  }
}

export class PatchArticlePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(UserActionsEnum.Update, ArticleEntity);
  }
}
export class DeleteArticlePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(UserActionsEnum.Delete, ArticleEntity);
  }
}
