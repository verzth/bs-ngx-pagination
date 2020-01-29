import { EventEmitter } from '@angular/core';
import Pagination from './ngx-bootstrap-pagination.interface';
export declare class NgxBootstrapPaginationComponent {
    pageChange: EventEmitter<number>;
    perPageChange: EventEmitter<number>;
    dataChange: EventEmitter<number>;
    dataValue: Pagination;
    selectPerPage: boolean;
    selectPerPageValues: Array<number>;
    inputPage: boolean;
    constructor();
    data: any;
    private normalizeData;
    pageChanged(page: number): void;
    perPageChanged(count: number): void;
    inputPageChanged(e: any): void;
}
