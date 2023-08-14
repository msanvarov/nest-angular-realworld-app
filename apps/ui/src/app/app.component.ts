import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreComponentsModule } from '@starter/core-components';

@Component({
  selector: 'starter-ui-root',
  standalone: true,
  imports: [CoreComponentsModule, RouterOutlet],
  template: `
    <starter-header />
    <router-outlet></router-outlet> 
    <starter-footer />
  `,
})
export class AppComponent {}
