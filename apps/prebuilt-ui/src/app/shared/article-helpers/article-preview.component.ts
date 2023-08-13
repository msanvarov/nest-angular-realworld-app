import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Article } from '../../core/models/article.model';
import { FavoriteButtonComponent } from '../buttons/favorite-button.component';
import { ArticleMetaComponent } from './article-meta.component';

@Component({
  selector: 'starter-article-preview',
  templateUrl: './article-preview.component.html',
  imports: [ArticleMetaComponent, FavoriteButtonComponent, RouterLink, NgForOf],
  standalone: true,
})
export class ArticlePreviewComponent {
  @Input() article!: Article;

  toggleFavorite(favorited: boolean): void {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }
}
