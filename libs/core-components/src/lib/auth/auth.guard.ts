import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iif, map, of, take } from 'rxjs';

import { LocalStorageService, selectAuthUser } from '@starter/store';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(
    private store: Store,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}

  canActivate() {
    const webtokenFromStorage =
      this.localStorageService.retrieveEntry('webtoken');

    return iif(
      () => !!webtokenFromStorage,
      // If token exists in service
      of(webtokenFromStorage),
      // If not, check in the store
      this.store.select(selectAuthUser).pipe(map((user) => user?.token)),
    ).pipe(
      take(1),
      map((token) => {
        // If token is present, grant access. Otherwise, redirect to login.
        if (token) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      }),
    );
  }
}
