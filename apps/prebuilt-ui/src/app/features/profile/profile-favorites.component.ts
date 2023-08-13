import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ArticleListConfig } from '../../core/models/article-list-config.model';
import { Profile } from '../../core/models/profile.model';
import { ProfileService } from '../../core/services/profile.service';
import { ArticleListComponent } from '../../shared/article-helpers/article-list.component';

@Component({
  selector: 'starter-profile-favorites',
  templateUrl: './profile-favorites.component.html',
  imports: [ArticleListComponent],
  standalone: true,
})
export class ProfileFavoritesComponent implements OnInit, OnDestroy {
  profile!: Profile;
  favoritesConfig!: ArticleListConfig;
  destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private readonly profileService: ProfileService,
  ) {}

  ngOnInit() {
    this.profileService
      .get(this.route.parent?.snapshot.params['username'])
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (profile: Profile) => {
          this.profile = profile;
          this.favoritesConfig = {
            type: 'all',
            filters: {
              favorited: this.profile.username,
            },
          };
        },
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
