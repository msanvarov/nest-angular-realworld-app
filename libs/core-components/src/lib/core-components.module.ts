import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';

import { ArticleComponent } from './article/article.component';
import { ArticleSearchService } from './articles/article-search.service';
import { ArticlesFeedComponent } from './articles/articles-feed.component';
import { ArticlesPaginationComponent } from './articles/articles-pagination.component';
import { ArticlesRightNavComponent } from './articles/articles-right-nav.component';
import { LoginFormComponent } from './auth/login-form.component';
import { RegisterFormComponent } from './auth/register-form.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { RichTextEditorComponent } from './create-article/rich-text-editor/rich-text-editor.component';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { OptionsComponent } from './options/options.component';
import { CeilPipe } from './pipes/ceil.pipe';
import { MomentPipe } from './pipes/moment.pipe';

@NgModule({
  providers: [ArticleSearchService],
  declarations: [
    CeilPipe,
    MomentPipe,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    ArticleComponent,
    ArticlesFeedComponent,
    RegisterFormComponent,
    ArticlesRightNavComponent,
    OptionsComponent,
    CreateArticleComponent,
    RichTextEditorComponent,
    ArticlesPaginationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    ArticleComponent,
    ArticlesFeedComponent,
    RegisterFormComponent,
    ArticlesRightNavComponent,
    OptionsComponent,
    CreateArticleComponent,
    RichTextEditorComponent,
    ArticlesPaginationComponent,
  ],
})
export class CoreComponentsModule {}
