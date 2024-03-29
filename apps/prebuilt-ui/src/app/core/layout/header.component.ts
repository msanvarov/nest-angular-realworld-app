import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ShowAuthedDirective } from '../../shared/show-authed.directive';
import { UserService } from '../services/user.service';

@Component({
  selector: 'starter-layout-header',
  templateUrl: './header.component.html',
  imports: [RouterLinkActive, RouterLink, AsyncPipe, NgIf, ShowAuthedDirective],
  standalone: true,
})
export class HeaderComponent {
  currentUser$ = inject(UserService).currentUser;
}
