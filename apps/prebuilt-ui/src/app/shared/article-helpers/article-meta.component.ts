import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Article } from '../../core/models/article.model';

@Component({
  selector: 'starter-article-meta',
  templateUrl: './article-meta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, DatePipe],
  standalone: true,
})
export class ArticleMetaComponent {
  @Input() article!: Article;
}
