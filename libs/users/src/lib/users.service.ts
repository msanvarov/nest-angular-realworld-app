import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map, tap } from 'rxjs';

import { ApiUsersRoutes, IUser } from '@starter/api-types';
import { Store } from '@starter/store';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _user: ReplaySubject<IUser> = new ReplaySubject<IUser>(1);

  /**
   * Constructor
   */
  constructor(private http: HttpClient, private store: Store) {}

  /**
   * Setter & getter for user
   *
   * @param value
   */
  set user(value: IUser) {
    // Store the value
    this._user.next(value);
  }

  get user$(): Observable<IUser> {
    return this._user.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get the current logged in user data
   */
  get(): Observable<IUser> {
    return this.http
      .get<{ user: IUser }>(ApiUsersRoutes.GET_USER, {
        headers: { Authorization: `Bearer ${this.store.get('token')}` },
      })
      .pipe(
        map((response) => response.user),
        tap((user) => {
          this._user.next(user);
        }),
      );
  }
}
