import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';

import {
  CoreComponentsModule,
  RedirectIfAuthenticatedGuard,
} from '@starter/core-components';

export const routeMeta: RouteMeta = {
  title: 'Login',
  // @ts-expect-error
  canActivate: [RedirectIfAuthenticatedGuard],
};

@Component({
  selector: 'ui-login-page',
  standalone: true,
  imports: [CoreComponentsModule],
  template: `
     <starter-login-form/>
  `,
})
export default class LoginPageComponent {}
