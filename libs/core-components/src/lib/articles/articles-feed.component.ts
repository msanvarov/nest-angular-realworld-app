import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import Fuse from 'fuse.js';
import { BehaviorSubject, Subscription, switchMap } from 'rxjs';

import { Article } from '@starter/realworld-oas';
import { getArticles, selectArticleFeed, selectArticles } from '@starter/store';

import {
  ArticleSearchService,
  ArticleWithMatches,
} from './article-search.service';

@Component({
  selector: 'starter-articles-feed',
  templateUrl: './articles-feed.component.html',
  styleUrls: ['./articles-feed.component.scss'],
})
export class ArticlesFeedComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private articleSearchService: ArticleSearchService,
    private sanitizer: DomSanitizer,
  ) {}

  articles$ = this.store.select(selectArticles);
  articleFeed$ = this.store.select(selectArticleFeed);
  articles: ArticleWithMatches[] = [];
  initialArticles: Article[] = [];
  articlesCount = 0;
  currentPage = 1; // Current page
  itemsPerPage = 20; // Items per page
  feedType = new BehaviorSubject<'global' | 'user'>('global');

  feedSubscription: Subscription = new Subscription();

  // Fuse.js options
  fuseInstance: Fuse<Article> | null = null;

  ngOnInit(): void {
    this.loadArticles(this.currentPage);
    this.feedSubscription = this.feedType
      .pipe(
        switchMap((type) =>
          type === 'global' ? this.articles$ : this.articleFeed$,
        ),
      )
      .subscribe((feed) => {
        console.log('feed', feed);
        if (feed) {
          this.articles = feed.articles.map((article) => ({ article }));
          this.initialArticles = feed.articles;
          this.articlesCount = feed.articlesCount;

          // Create Fuse instance
          this.fuseInstance = new Fuse(this.initialArticles, {
            keys: ['title', 'description'],
            includeScore: true,
            shouldSort: true,
            includeMatches: true,
          });
          this.articleSearchService.setFuseInstance(this.fuseInstance);
        } else {
          this.articles = [];
          this.initialArticles = [];
          this.articlesCount = 0;
        }
      });
  }

  ngOnDestroy(): void {
    this.feedSubscription.unsubscribe(); // Unsubscribe when component is destroyed
  }

  handleChangeFeedType(feedType: 'global' | 'user'): void {
    this.feedType.next(feedType);
    console.log('feedType', feedType);
    // this.loadArticles(this.currentPage);
  }

  handleSearchResults(searchResults: Fuse.FuseResult<Article>[] | null): void {
    if (searchResults === null) {
      this.articles = this.initialArticles.map((article) => ({ article }));
    } else if (searchResults.length > 0) {
      this.articles = searchResults.map((result) => ({
        article: result.item,
        matches: result.matches, // Save the match information for use in the template
      })) as ArticleWithMatches[];
    } else {
      this.articles = [];
    }
  }

  highlightMatches(
    text: string,
    matches: Fuse.FuseResultMatch[] | undefined,
    key: string,
  ): SafeHtml {
    if (!matches) return text; // If there are no matches, return the original text

    // Find the matches for the given key
    const keyMatches = matches.find((match) => match.key === key)?.indices;

    if (!keyMatches) return text; // If there are no matches for this key, return the original text

    let highlighted = '';
    let position = 0;

    for (const [start, end] of keyMatches) {
      // Add the portion of text before the match
      highlighted += text.slice(position, start);
      // Add the matched portion of text, wrapped in a span with a highlight class
      highlighted += `<span style='background-color: #36454F;'>${text.slice(
        start,
        end + 1,
      )}</span>`;
      // Update the current position
      position = end + 1;
    }

    // Add the remaining portion of text
    highlighted += text.slice(position);

    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }

  loadArticles(page: number): void {
    // Calculate the offset based on the current page
    const offset = (page - 1) * this.itemsPerPage;

    this.store.dispatch(
      getArticles({
        limit: this.itemsPerPage,
        offset: offset,
      }),
    );
  }

  // Handle the page change event from your pagination component
  handlePageChange(page: number): void {
    this.currentPage = page;
    this.loadArticles(page);
  }
}
