/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';

import { AuthGuard, CoreComponentsModule } from '@starter/core-components';

export const routeMeta: RouteMeta = {
  title: 'Options - RealWorld Angular',
  // @ts-expect-error
  canActivate: [AuthGuard],
};

@Component({
  selector: 'starter-ui-options-page',
  standalone: true,
  imports: [CoreComponentsModule],
  template: `
     <starter-settings/>
  `,
})
export default class SettingsPageComponent {}
