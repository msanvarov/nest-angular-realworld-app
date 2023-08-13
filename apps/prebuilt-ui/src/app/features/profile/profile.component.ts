import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Subject, combineLatest, of, throwError } from 'rxjs';
import { catchError, switchMap, takeUntil } from 'rxjs/operators';

import { Profile } from '../../core/models/profile.model';
import { ProfileService } from '../../core/services/profile.service';
import { UserService } from '../../core/services/user.service';
import { FollowButtonComponent } from '../../shared/buttons/follow-button.component';

@Component({
  selector: 'starter-profile-page',
  templateUrl: './profile.component.html',
  imports: [
    FollowButtonComponent,
    NgIf,
    RouterLink,
    AsyncPipe,
    RouterLinkActive,
    RouterOutlet,
  ],
  standalone: true,
})
export class ProfileComponent implements OnInit, OnDestroy {
  profile!: Profile;
  isUser = false;
  destroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly profileService: ProfileService,
  ) {}

  ngOnInit() {
    this.profileService
      .get(this.route.snapshot.params['username'])
      .pipe(
        catchError((error) => {
          void this.router.navigate(['/']);
          return throwError(error);
        }),
        switchMap((profile) => {
          return combineLatest([of(profile), this.userService.currentUser]);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe(([profile, user]) => {
        this.profile = profile;
        this.isUser = profile.username === user?.username;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onToggleFollowing(profile: Profile) {
    this.profile = profile;
  }
}
