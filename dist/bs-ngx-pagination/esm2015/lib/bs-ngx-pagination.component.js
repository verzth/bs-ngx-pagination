/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class BsNgxPaginationComponent {
    constructor() {
        this.pageChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChanged(page) {
        this.pageChange.emit(page);
    }
}
BsNgxPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-ngx-pagination',
                template: "<ul class=\"pagination justify-content-center\">\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>1\">\r\n    <a class=\"page-link\" [href]=\"data.prev_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page-1);$event.preventDefault();\">\r\n      <span aria-hidden=\"true\">&laquo;</span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>1\" (click)=\"pageChanged(1);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>2\" (click)=\"pageChanged(2);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page==7\" (click)=\"pageChanged(3);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\r\n  <li class=\"page-item disabled\" *ngIf=\"data.current_page>7\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>5\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-3 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-2 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-1 }}</a></li>\r\n\r\n  <li class=\"page-item active\"><a class=\"page-link\" href=\"#\" (click)=\"$event.preventDefault()\">{{ data.current_page }}</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-2\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">{{ data.current_page+1 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+2);$event.preventDefault();\">{{ data.current_page+2 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+3);$event.preventDefault();\">{{ data.current_page+3 }}</a></li>\r\n\r\n  <li class=\"page-item disabled\" *ngIf=\"data.current_page<data.last_page-6\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page==data.last_page-6\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-2);$event.preventDefault();\">{{ data.last_page-2 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-1\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-1);$event.preventDefault();\">{{ data.last_page-1 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page);$event.preventDefault();\">{{ data.last_page }}</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\">\r\n    <a class=\"page-link\" [href]=\"data.next_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">\r\n      <span aria-hidden=\"true\">&raquo;</span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
BsNgxPaginationComponent.ctorParameters = () => [];
BsNgxPaginationComponent.propDecorators = {
    pageChange: [{ type: Output }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BsNgxPaginationComponent.prototype.pageChange;
    /** @type {?} */
    BsNgxPaginationComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnMtbmd4LXBhZ2luYXRpb24vIiwic291cmNlcyI6WyJsaWIvYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBVTdFLE1BQU0sT0FBTyx3QkFBd0I7SUFHbkM7UUFGVSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUVsQyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7OztJQUNELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsbzZHQUErQzs7YUFJaEQ7Ozs7O3lCQUVFLE1BQU07bUJBQ04sS0FBSzs7OztJQUROLDhDQUFrRDs7SUFDbEQsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vYnMtbmd4LXBhZ2luYXRpb24uaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtbmd4LXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ2JzLW5neC1wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJ2JzLW5neC1wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJzTmd4UGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBJbnB1dCgpIGRhdGE6IFBhZ2luYXRpb247XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgcGFnZUNoYW5nZWQocGFnZTogbnVtYmVyKSB7XG4gICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSk7XG4gIH1cblxufVxuIl19