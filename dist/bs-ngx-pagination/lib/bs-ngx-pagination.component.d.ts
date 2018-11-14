import { EventEmitter, OnInit } from '@angular/core';
import Pagination from './bs-ngx-pagination.interface';
export declare class BsNgxPaginationComponent implements OnInit {
    pageChange: EventEmitter<number>;
    data: Pagination;
    constructor();
    ngOnInit(): void;
    pageChanged(page: number): void;
}
