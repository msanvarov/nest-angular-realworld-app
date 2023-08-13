import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { Profile } from '../../core/models/profile.model';
import { ProfileService } from '../../core/services/profile.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'starter-follow-button',
  templateUrl: './follow-button.component.html',
  imports: [NgClass],
  standalone: true,
})
export class FollowButtonComponent implements OnDestroy {
  @Input() profile!: Profile;
  @Output() toggle = new EventEmitter<Profile>();
  isSubmitting = false;
  destroy$ = new Subject<void>();

  constructor(
    private readonly profileService: ProfileService,
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleFollowing(): void {
    this.isSubmitting = true;

    this.userService.isAuthenticated
      .pipe(
        switchMap((isAuthenticated: boolean) => {
          if (!isAuthenticated) {
            void this.router.navigate(['/login']);
            return EMPTY;
          }

          if (!this.profile.following) {
            return this.profileService.follow(this.profile.username);
          } else {
            return this.profileService.unfollow(this.profile.username);
          }
        }),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (profile) => {
          this.isSubmitting = false;
          this.toggle.emit(profile);
        },
        error: () => (this.isSubmitting = false),
      });
  }
}
