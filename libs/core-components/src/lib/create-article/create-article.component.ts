import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { createArticle, selectArticle } from '@starter/store';

@Component({
  selector: 'starter-create-article-form',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit, OnDestroy {
  constructor(private store: Store, private router: Router) {}

  createdArticle$ = this.store.select(selectArticle);
  articleForm = new FormGroup({
    name: new FormControl('Example', [Validators.required]),
    description: new FormControl('Example Description', [Validators.required]),
    body: new FormControl('', Validators.required),
    tags: new FormArray([
      new FormControl('global'),
      new FormControl('blog'),
    ]) as FormArray<FormControl<string>>,
  });

  createdArticleSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.createdArticleSubscription = this.createdArticle$.subscribe(
      (article) => {
        if (article) {
          this.router.navigate(['/article/', article.slug]);
        }
      },
    );
  }

  ngOnDestroy(): void {
    this.createdArticleSubscription.unsubscribe(); // Unsubscribe when component is destroyed
  }

  onSubmit() {
    if (this.articleForm.valid) {
      console.log('articleForm', this.articleForm);
      this.store.dispatch(
        createArticle({
          body: this.articleForm.value.body ?? 'No body',
          description: this.articleForm.value.description ?? 'No description',
          tagList: this.articleForm.value.tags?.filter(Boolean) ?? [],
          title: this.articleForm.value.name ?? 'No name',
        }),
      );
    } else {
      this.articleForm.markAllAsTouched();
    }
  }
}
