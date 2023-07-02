import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';

import { ArticlesFeedComponent } from './articles/articles-feed.component';
import { ArticlesRightNavComponent } from './articles/articles-right-nav.component';
import { LoginFormComponent } from './auth/login-form.component';
import { RegisterFormComponent } from './auth/register-form.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { RichTextEditorComponent } from './create-article/rich-text-editor/rich-text-editor.component';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    ArticlesFeedComponent,
    RegisterFormComponent,
    ArticlesRightNavComponent,
    OptionsComponent,
    CreateArticleComponent,
    RichTextEditorComponent,
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
    ArticlesFeedComponent,
    RegisterFormComponent,
    ArticlesRightNavComponent,
    OptionsComponent,
    CreateArticleComponent,
    RichTextEditorComponent,
  ],
})
export class CoreComponentsModule {}
