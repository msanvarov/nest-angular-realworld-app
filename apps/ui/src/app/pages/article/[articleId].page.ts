import { RouteMeta } from '@analogjs/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, map } from 'rxjs';

import { AuthGuard, CoreComponentsModule } from '@starter/core-components';
import { getArticle } from '@starter/store';

export const routeMeta: RouteMeta = {
  title: 'Article Details',
  // @ts-expect-error
  canActivate: [AuthGuard],
};

@Component({
  selector: 'ui-article-page',
  standalone: true,
  imports: [CoreComponentsModule],
  template: ` <starter-article></starter-article> `,
})
export default class ArticlePageComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private store: Store) {}

  articleId$ = this.route.paramMap.pipe(
    map((params) => params.get('articleId')),
  );

  articleSubscription = new Subscription();

  ngOnInit() {
    this.articleSubscription = this.articleId$.subscribe((articleId) => {
      if (articleId) {
        this.store.dispatch(
          getArticle({
            slug: articleId,
          }),
        );
      }
    });
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }
}
