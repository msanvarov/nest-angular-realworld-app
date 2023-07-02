import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IArticle } from '@starter/api-types';
import { selectArticles } from '@starter/store';

@Component({
  selector: 'starter-articles-feed',
  templateUrl: './articles-feed.component.html',
})
export class ArticlesFeedComponent implements OnInit {
  constructor(private store: Store) {}

  articles$ = this.store.select(selectArticles);
  articles: IArticle[] = [];

  articlesSubscription: Subscription = new Subscription(); // For handling the subscription

  ngOnInit(): void {
    this.articlesSubscription = this.articles$.subscribe((articles) => {
      if (articles) {
        // see if there are more articles to load
        // if (articles.articles.length < articles.articlesCount) {
        //     // load more articles on pagination
        //     this.store.dispatch(
        //         getArticles({
        //             limit: 10,
        //             offset: articles.articles.length,
        //         }),
        //     );
        // }
        this.articles = articles.articles;
        // .map((article) => ({
        //   id: article.id,
        //   title: article.title,
        //   img: 'https://via.placeholder.com/380x240',
        //   category: article.tagList,
        //   author: article.author,
        // }));
      }
    });
  }
}
