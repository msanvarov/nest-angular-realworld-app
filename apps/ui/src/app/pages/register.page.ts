/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Component } from '@angular/core';

import { CoreComponentsModule } from '@starter/core-components';

@Component({
  selector: 'starter-ui-register-page',
  standalone: true,
  imports: [CoreComponentsModule],
  template: `
     <starter-registration-form/>
  `,
})
export default class RegisterPageComponent {}
