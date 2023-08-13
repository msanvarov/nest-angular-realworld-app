import {
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IUserResponseBody } from '@starter/api-types';
import { logout, selectAuthUser } from '@starter/store';

@Component({
  selector: 'starter-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  @Input() header__transparent: string | undefined;

  user$ = this.store.select(selectAuthUser);
  user: IUserResponseBody | null = null;
  headerSticky = false;
  displayNavbar = false;
  displayProfile = false;

  userSubscription: Subscription = new Subscription(); // For handling the subscription

  // sticky nav
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.headerSticky = true;
    } else {
      this.headerSticky = false;
    }
  }

  ngOnInit(): void {
    this.userSubscription = this.user$.subscribe((user) => {
      if (user) {
        this.displayProfile = true;
        this.user = user;
      } else {
        this.displayProfile = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  handleLogout() {
    this.store.dispatch(logout());
  }

  handleNavbar() {
    this.displayNavbar = true;
  }
  handleNavbarClose() {
    this.displayNavbar = false;
  }
}
