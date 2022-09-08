import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserParam = createParamDecorator(
  (recordKey: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if (!request.user) {
      null;
    }

    if (recordKey) {
      return request.user.user[recordKey as keyof typeof request.user.user];
    }

    return request.user.user;
  },
);
