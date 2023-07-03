import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'starter-articles-pagination',
  templateUrl: './articles-pagination.component.html',
})
export class ArticlesPaginationComponent implements OnChanges {
  @Input() currentPage!: number;
  @Input() totalItems!: number;
  @Input() itemsPerPage!: number;

  @Output() pageChange = new EventEmitter<number>();

  totalPages: number[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalItems'] || changes['itemsPerPage']) {
      this.totalPages = Array(Math.ceil(this.totalItems / this.itemsPerPage))
        .fill(0)
        .map((x, i) => i + 1);
    }
  }

  handlePageChange(page: number) {
    this.pageChange.emit(page);
  }
}
