import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, tap } from 'rxjs';

import { ApiAuthRoutes, IAuthRegisterPayload, IUser } from '@starter/api-types';
import { Store } from '@starter/store';
import { UsersService } from '@starter/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router,
    private usersService: UsersService,
  ) {}

  get user() {
    return this.store.get<IUser>('user');
  }

  get isAuthenticated() {
    return of(this.user !== undefined);
  }

  loginUser(email: string, password: string) {
    return this.http
      .post(ApiAuthRoutes.LOGIN, {
        email,
        password,
      })
      .pipe(
        tap(({ user }: any) => {
          // TODO: fix typing hacks
          this.store.set('token', (user as Record<string, string>)['token']);
        }),
      );
  }

  registerUser(registerPayload: IAuthRegisterPayload) {
    return this.http.post(ApiAuthRoutes.REGISTER, registerPayload).pipe(
      tap(({ user }: any) => {
        // TODO: fix typing hacks
        this.store.set('token', (user as Record<string, string>)['token']);
      }),
    );
  }

  logoutUser() {
    this.store.set('user', undefined);
    return this.router.navigate(['/auth/login']);
  }
}
