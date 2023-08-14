import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AuthGuard, CoreComponentsModule } from '@starter/core-components';

export const routeMeta: RouteMeta = {
  title: 'Create Article - RealWorld Angular',
  // @ts-expect-error
  canActivate: [AuthGuard],
};

@Component({
  selector: 'starter-ui-create-article-page',
  standalone: true,
  imports: [CoreComponentsModule],
  template: `
     <starter-create-article-form/>
  `,
})
export default class CreateArticlePageComponent {}
