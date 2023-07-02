import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { selectAuthUser } from '@starter/store';

@Injectable({ providedIn: 'root' })
export class RedirectIfAuthenticatedGuard {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectAuthUser).pipe(
      take(1),
      map((user) => {
        if (user) {
          this.router.navigate(['/']);
          return false;
        } else {
          return true;
        }
      }),
    );
  }
}
