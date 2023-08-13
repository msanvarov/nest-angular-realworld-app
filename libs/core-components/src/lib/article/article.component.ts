import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Article } from '@starter/realworld-oas';
import { selectArticle } from '@starter/store';

@Component({
  selector: 'starter-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}
  article$ = this.store.select(selectArticle);
  article: Article | null = null;

  articleSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.articleSubscription = this.article$.subscribe((article) => {
      console.log('article', article);
      if (article) {
        this.article = article;
      }
    });
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }
}
