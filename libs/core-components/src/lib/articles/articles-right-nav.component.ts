// starter-articles-right-nav
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IArticle } from '@starter/api-types';
import { selectArticleTags, selectAuthoredArticles } from '@starter/store';

@Component({
  selector: 'starter-articles-right-nav',
  templateUrl: './articles-right-nav.component.html',
})
export class ArticlesRightNavComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  tags$ = this.store.select(selectArticleTags);
  authoredArticles$ = this.store.select(selectAuthoredArticles);
  tags: string[] = [];
  authoredArticles: IArticle[] = [];

  tagsSubscription: Subscription = new Subscription(); // For handling the subscription
  authoredArticlesSubscription: Subscription = new Subscription(); // For handling the subscription

  ngOnInit() {
    this.tagsSubscription = this.tags$.subscribe((tags) => {
      this.tags = tags ?? [];
    });
    this.authoredArticlesSubscription = this.authoredArticles$.subscribe(
      (authoredArticles) => {
        console.log('authoredArticles', authoredArticles);
        this.authoredArticles = authoredArticles?.articles ?? [];
      },
    );
  }

  ngOnDestroy() {
    if (this.tagsSubscription) {
      this.tagsSubscription.unsubscribe();
      this.authoredArticlesSubscription.unsubscribe();
    }
  }
}
