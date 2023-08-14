import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Article, Profile } from '@starter/realworld-oas';
import { getProfile, selectArticle, selectProfile } from '@starter/store';

@Component({
  selector: 'starter-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}
  article$ = this.store.select(selectArticle);
  article: Article | null = null;
  author$ = this.store.select(selectProfile);
  author: Profile | null = null;

  articleSubscription: Subscription = new Subscription();
  authorSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.articleSubscription = this.article$.subscribe((article) => {
      console.log('article', article);
      if (article) {
        this.article = article;
        this.store.dispatch(
          getProfile({
            username: article.author.username,
          }),
        );
      }
    });
    this.authorSubscription = this.author$.subscribe((author) => {
      console.log('author', author);
      if (author) {
        this.author = author;
      }
    });
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }
}
