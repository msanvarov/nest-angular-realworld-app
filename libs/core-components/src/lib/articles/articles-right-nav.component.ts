// starter-articles-right-nav
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import Fuse from 'fuse.js';
import { Subscription } from 'rxjs';

import { Article } from '@starter/realworld-oas';
import { selectArticleTags, selectAuthoredArticles } from '@starter/store';

import { ArticleSearchService } from './article-search.service';

@Component({
  selector: 'starter-articles-right-nav',
  templateUrl: './articles-right-nav.component.html',
})
export class ArticlesRightNavComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private articleSearchService: ArticleSearchService,
  ) {}

  tags$ = this.store.select(selectArticleTags);
  authoredArticles$ = this.store.select(selectAuthoredArticles);
  tags: string[] = [];
  authoredArticles: Article[] = [];

  tagsSubscription: Subscription = new Subscription(); // For handling the subscription
  authoredArticlesSubscription: Subscription = new Subscription(); // For handling the subscription

  @Output() searchResults = new EventEmitter<
    Fuse.FuseResult<Article>[] | null
  >();

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

  onSearch(query: string) {
    if (query === '') {
      this.searchResults.emit(null);
    } else {
      const searchResults = this.articleSearchService.searchArticles(query);
      console.log(searchResults);
      this.searchResults.emit(searchResults);
    }
  }
}
