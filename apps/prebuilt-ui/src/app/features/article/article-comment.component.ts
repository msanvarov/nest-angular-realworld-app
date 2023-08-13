import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';

import { Comment } from '../../core/models/comment.model';
import { User } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'starter-article-comment',
  templateUrl: './article-comment.component.html',
  imports: [RouterLink, DatePipe, NgIf, AsyncPipe],
  standalone: true,
})
export class ArticleCommentComponent {
  @Input() comment!: Comment;
  @Output() delete = new EventEmitter<boolean>();

  canModify$ = inject(UserService).currentUser.pipe(
    map(
      (userData: User | null) =>
        userData?.username === this.comment.author.username,
    ),
  );
}
