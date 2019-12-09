import {Component, EventEmitter, Input, Output} from '@angular/core';
import Pagination from './bs-ngx-pagination.interface';

@Component({
  selector: 'bs-ngx-pagination',
  templateUrl: 'bs-ngx-pagination.component.html',
  styleUrls: [
    'bs-ngx-pagination.component.scss'
  ]
})
export class BsNgxPaginationComponent {
  @Output() pageChange = new EventEmitter<number>();
  @Output() perPageChange = new EventEmitter<number>();
  @Output() dataChange = new EventEmitter<number>();
  dataValue: Pagination = {} as Pagination;
  constructor() {}

  @Input()
  get data() {
    return this.data;
  }
  set data(val) {
    this.dataValue = val;
    this.normalizeData();
    this.dataChange.emit(val);
  }
  private normalizeData() {
    if (this.dataValue.select_per_page === undefined) {
      this.dataValue.select_per_page = true;
    }
    if (this.dataValue.input_page === undefined) {
      this.dataValue.input_page = true;
    }
    if (this.dataValue.select_per_page_values === undefined || this.dataValue.select_per_page_values.length === 0) {
      this.dataValue.select_per_page_values = [10, 20, 50, 100, 250];
    }
    if (this.dataValue.select_per_page_values.indexOf(this.dataValue.per_page) === -1) {
      this.dataValue.select_per_page_values.push(+this.dataValue.per_page);
      this.dataValue.select_per_page_values.sort((a, b) => a - b);
    }
  }
  pageChanged(page: number) {
    if (page < 1) {
      page = 1;
    } else if (page > this.dataValue.last_page) {
      page = this.dataValue.last_page;
    }
    this.pageChange.emit(page);
  }
  perPageChanged(count: number) {
    this.perPageChange.emit(+count);
  }
  inputPageChanged(e) {
    let page = +e.target.value;
    if (!Number.isNaN(page)) {
      if (page < 1) {
        page = 1;
        e.target.value = page;
      } else if (page > this.dataValue.last_page) {
        page = this.dataValue.last_page;
        e.target.value = page;
      }
      this.pageChange.emit(page);
    } else {
      e.target.value = this.dataValue.current_page;
    }
  }
}
