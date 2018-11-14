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
  @Input() data: Pagination;
  constructor() { }

  ngOnInit() {
  }
  pageChanged(page: number) {
    this.pageChange.emit(page);
  }

}
