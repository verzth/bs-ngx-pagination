import { EventEmitter } from '@angular/core';
import Pagination from './bs-ngx-pagination.interface';
export declare class BsNgxPaginationComponent {
    pageChange: EventEmitter<number>;
    perPageChange: EventEmitter<number>;
    dataChange: EventEmitter<number>;
    dataValue: Pagination;
    constructor();
    data: any;
    private normalizeData;
    pageChanged(page: number): void;
    perPageChanged(count: number): void;
    inputPageChanged(e: any): void;
}
