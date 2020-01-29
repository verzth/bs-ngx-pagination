import {Component, EventEmitter, Input, Output} from '@angular/core';
import Pagination from './ngx-bootstrap-pagination.interface';

@Component({
  selector: 'ngx-bootstrap-pagination',
  templateUrl: 'ngx-bootstrap-pagination.component.html',
  styleUrls: [
    'ngx-bootstrap-pagination.component.scss'
  ]
})
export class NgxBootstrapPaginationComponent {
  @Output() pageChange = new EventEmitter<number>();
  @Output() perPageChange = new EventEmitter<number>();
  @Output() dataChange = new EventEmitter<number>();
  dataValue: Pagination = {} as Pagination;
  @Input() selectPerPage = true;
  @Input() selectPerPageValues: Array<number> = [10, 20, 50, 100, 250];
  @Input() inputPage = true;
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
    if (this.selectPerPageValues.indexOf(+this.dataValue.per_page) === -1) {
      this.selectPerPageValues.push(+this.dataValue.per_page);
      this.selectPerPageValues.sort((a, b) => a - b);
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
    if (this.dataValue.per_page !== count) {
      this.perPageChange.emit(+count);
    }
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
