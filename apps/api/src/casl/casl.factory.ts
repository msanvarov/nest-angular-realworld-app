import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';

import { UserActionsEnum, UserRolesEnum } from '@starter/api-types';

import { ArticleEntity } from '../article/article.entity';
import { UserEntity } from '../users/user.entity';

// Creating CASL subjects to manage. Remark: all is a special keyword in CASL that represents "any subject".
type Subjects = InferSubjects<typeof UserEntity | typeof ArticleEntity> | 'all';

export type AppAbility = Ability<[UserActionsEnum, Subjects]>;

@Injectable()
export class CaslFactory {
  createForUser(user: UserEntity) {
    // Remark: the user is coming from the req.user.
    const { can, build } = new AbilityBuilder<
      Ability<[UserActionsEnum, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    if (user.roles.some(({ role }) => role === UserRolesEnum.SUDO)) {
      can(UserActionsEnum.Manage, 'all'); // read-write access to everything
    } else {
      can(UserActionsEnum.Read, 'all'); // read-only access to everything
    }

    // User scoped permissions
    can(UserActionsEnum.Update, ArticleEntity, { author: user });
    can(UserActionsEnum.Delete, ArticleEntity, { author: user });

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
