import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Pagination from './bs-ngx-pagination.interface';

@Component({
  selector: 'bs-ngx-pagination',
  templateUrl: 'bs-ngx-pagination.component.html',
  styleUrls: [
    'bs-ngx-pagination.component.scss'
  ]
})
export class BsNgxPaginationComponent implements OnInit {
  @Output() pageChange = new EventEmitter<number>();
  @Output() perPageChange = new EventEmitter<number>();
  @Input() data: Pagination = {} as Pagination;
  constructor() {}

  ngOnInit() {
    if (this.data.select_per_page === undefined) {
      this.data.select_per_page = true;
    }
    if (this.data.input_page === undefined) {
      this.data.input_page = true;
    }
    if (this.data.select_per_page_values === undefined || this.data.select_per_page_values.length === 0) {
      this.data.select_per_page_values = [10, 20, 50, 100, 250];
    }
  }
  pageChanged(page: number) {
    if (page < 1) {
      page = 1;
    } else if (page > this.data.last_page) {
      page = this.data.last_page;
    }
    this.pageChange.emit(page);
  }
  perPageChanged(count: number) {
    this.perPageChange.emit(count);
  }
  inputPageChanged(e) {
    let page = +e.target.value;
    if (!Number.isNaN(page)) {
      if (page < 1) {
        page = 1;
        e.target.value = page;
      } else if (page > this.data.last_page) {
        page = this.data.last_page;
        e.target.value = page;
      }
      this.pageChange.emit(page);
    } else {
      e.target.value = this.data.current_page;
    }
  }
}
