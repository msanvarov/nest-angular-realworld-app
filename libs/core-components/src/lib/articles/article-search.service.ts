import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';

import { Article } from '@starter/realworld-oas';

export type ArticleWithMatches = {
  article: Article;
  matches?: Fuse.FuseResultMatch[];
};

@Injectable({
  providedIn: 'root',
})
export class ArticleSearchService {
  private fuse: Fuse<Article> | null = null;

  setFuseInstance(fuse: Fuse<Article>) {
    this.fuse = fuse;
  }

  searchArticles(query: string): Fuse.FuseResult<Article>[] | null {
    return this.fuse ? this.fuse.search(query) : null;
  }
}
