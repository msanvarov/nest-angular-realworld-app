import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'ui-article-page',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <section class="blog__area pt-170 pb-100">
      <div class="container">
        <div class="row">ID: {{ articleId$ | async }}</div>
      </div>
    </section>
  `,
})
export class ArticlePageComponent {
  articleId$ = this.route.paramMap.pipe(
    map((params) => params.get('articleId')),
  );

  constructor(private route: ActivatedRoute) {}
}
