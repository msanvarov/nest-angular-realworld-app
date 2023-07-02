import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';

import { selectAuthUser } from '@starter/store';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private store: Store, private router: Router) {}

  canActivate() {
    return this.store.select(selectAuthUser).pipe(
      take(1),
      map((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }),
    );
  }
}
