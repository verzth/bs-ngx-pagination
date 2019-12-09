/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var BsNgxPaginationComponent = /** @class */ (function () {
    function BsNgxPaginationComponent() {
        this.pageChange = new EventEmitter();
        this.perPageChange = new EventEmitter();
        this.data = (/** @type {?} */ ({}));
    }
    /**
     * @return {?}
     */
    BsNgxPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.data.select_per_page === undefined) {
            this.data.select_per_page = true;
        }
        if (this.data.input_page === undefined) {
            this.data.input_page = true;
        }
        if (this.data.select_per_page_values === undefined || this.data.select_per_page_values.length === 0) {
            this.data.select_per_page_values = [10, 20, 50, 100, 250];
        }
        if (this.data.select_per_page_values.indexOf(this.data.per_page) === -1) {
            this.data.select_per_page_values.push(+this.data.per_page);
            this.data.select_per_page_values.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a - b; }));
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    BsNgxPaginationComponent.prototype.pageChanged = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (page < 1) {
            page = 1;
        }
        else if (page > this.data.last_page) {
            page = this.data.last_page;
        }
        this.pageChange.emit(page);
    };
    /**
     * @param {?} count
     * @return {?}
     */
    BsNgxPaginationComponent.prototype.perPageChanged = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        this.perPageChange.emit(count);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    BsNgxPaginationComponent.prototype.inputPageChanged = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var page = +e.target.value;
        if (!Number.isNaN(page)) {
            if (page < 1) {
                page = 1;
                e.target.value = page;
            }
            else if (page > this.data.last_page) {
                page = this.data.last_page;
                e.target.value = page;
            }
            this.pageChange.emit(page);
        }
        else {
            e.target.value = this.data.current_page;
        }
    };
    BsNgxPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-ngx-pagination',
                    template: "<div class=\"page-container d-flex justify-content-between align-items-center\">\r\n  <div class=\"form-group page-per-page\" *ngIf=\"data.select_per_page\">\r\n    <label>Per Page</label>\r\n    <select class=\"form-control\" name=\"per_page\" (change)=\"perPageChanged($event.target.value)\">\r\n      <option *ngFor=\"let pp of data.select_per_page_values\" [value]=\"pp\" [selected]=\"data.per_page==pp\">{{ pp }}</option>\r\n    </select>\r\n  </div>\r\n  <ul class=\"pagination justify-content-center align-items-center\">\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>1\">\r\n      <a class=\"page-link\" [href]=\"data.prev_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page-1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>1\" (click)=\"pageChanged(1);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>2\" (click)=\"pageChanged(2);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page==7\" (click)=\"pageChanged(3);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"data.current_page>7\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>5\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-3 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-2);$event.preventDefault();\">{{ data.current_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-1);$event.preventDefault();\">{{ data.current_page-1 }}</a></li>\r\n\r\n    <li class=\"page-item active\"><a class=\"page-link\" href=\"#\" (click)=\"$event.preventDefault()\">{{ data.current_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-2\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">{{ data.current_page+1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+2);$event.preventDefault();\">{{ data.current_page+2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+3);$event.preventDefault();\">{{ data.current_page+3 }}</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"data.current_page<data.last_page-6\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page==data.last_page-6\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-2);$event.preventDefault();\">{{ data.last_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-1\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-1);$event.preventDefault();\">{{ data.last_page-1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page);$event.preventDefault();\">{{ data.last_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\">\r\n      <a class=\"page-link\" [href]=\"data.next_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"form-group page-input\" *ngIf=\"data.input_page\">\r\n    <label>Page</label>\r\n    <input class=\"form-control\" name=\"page\" (blur)=\"inputPageChanged($event)\" (keyup.enter)=\"$event.target.blur()\" [value]=\"data.current_page\">\r\n  </div>\r\n</div>\r\n",
                    styles: [".page-container{padding:10px 20px}.page-container .page-input>label,.page-container .page-per-page>label{font-size:11px}.page-container .page-input{text-align:right;max-width:70px}"]
                }] }
    ];
    /** @nocollapse */
    BsNgxPaginationComponent.ctorParameters = function () { return []; };
    BsNgxPaginationComponent.propDecorators = {
        pageChange: [{ type: Output }],
        perPageChange: [{ type: Output }],
        data: [{ type: Input }]
    };
    return BsNgxPaginationComponent;
}());
export { BsNgxPaginationComponent };
if (false) {
    /** @type {?} */
    BsNgxPaginationComponent.prototype.pageChange;
    /** @type {?} */
    BsNgxPaginationComponent.prototype.perPageChange;
    /** @type {?} */
    BsNgxPaginationComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnMtbmd4LXBhZ2luYXRpb24vIiwic291cmNlcyI6WyJsaWIvYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzdFO0lBV0U7UUFIVSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUMsU0FBSSxHQUFlLG1CQUFBLEVBQUUsRUFBYyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFaEIsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbkcsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJOzs7OztZQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxFQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDOzs7OztJQUNELDhDQUFXOzs7O0lBQVgsVUFBWSxJQUFZO1FBQ3RCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjthQUFNLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBQ0QsaURBQWM7Ozs7SUFBZCxVQUFlLEtBQWE7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFDRCxtREFBZ0I7Ozs7SUFBaEIsVUFBaUIsQ0FBQzs7WUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNaLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNyQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUN2QjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN6QztJQUNILENBQUM7O2dCQXJERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsK3NJQUErQzs7aUJBSWhEOzs7Ozs2QkFFRSxNQUFNO2dDQUNOLE1BQU07dUJBQ04sS0FBSzs7SUE0Q1IsK0JBQUM7Q0FBQSxBQXRERCxJQXNEQztTQS9DWSx3QkFBd0I7OztJQUNuQyw4Q0FBa0Q7O0lBQ2xELGlEQUFxRDs7SUFDckQsd0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vYnMtbmd4LXBhZ2luYXRpb24uaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtbmd4LXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ2JzLW5neC1wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJ2JzLW5neC1wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJzTmd4UGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBwZXJQYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBJbnB1dCgpIGRhdGE6IFBhZ2luYXRpb24gPSB7fSBhcyBQYWdpbmF0aW9uO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5zZWxlY3RfcGVyX3BhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kYXRhLnNlbGVjdF9wZXJfcGFnZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEuaW5wdXRfcGFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRhdGEuaW5wdXRfcGFnZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEuc2VsZWN0X3Blcl9wYWdlX3ZhbHVlcyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZGF0YS5zZWxlY3RfcGVyX3BhZ2VfdmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5kYXRhLnNlbGVjdF9wZXJfcGFnZV92YWx1ZXMgPSBbMTAsIDIwLCA1MCwgMTAwLCAyNTBdO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLnNlbGVjdF9wZXJfcGFnZV92YWx1ZXMuaW5kZXhPZih0aGlzLmRhdGEucGVyX3BhZ2UpID09PSAtMSkge1xuICAgICAgdGhpcy5kYXRhLnNlbGVjdF9wZXJfcGFnZV92YWx1ZXMucHVzaCgrdGhpcy5kYXRhLnBlcl9wYWdlKTtcbiAgICAgIHRoaXMuZGF0YS5zZWxlY3RfcGVyX3BhZ2VfdmFsdWVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9XG4gIH1cbiAgcGFnZUNoYW5nZWQocGFnZTogbnVtYmVyKSB7XG4gICAgaWYgKHBhZ2UgPCAxKSB7XG4gICAgICBwYWdlID0gMTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPiB0aGlzLmRhdGEubGFzdF9wYWdlKSB7XG4gICAgICBwYWdlID0gdGhpcy5kYXRhLmxhc3RfcGFnZTtcbiAgICB9XG4gICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSk7XG4gIH1cbiAgcGVyUGFnZUNoYW5nZWQoY291bnQ6IG51bWJlcikge1xuICAgIHRoaXMucGVyUGFnZUNoYW5nZS5lbWl0KGNvdW50KTtcbiAgfVxuICBpbnB1dFBhZ2VDaGFuZ2VkKGUpIHtcbiAgICBsZXQgcGFnZSA9ICtlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAoIU51bWJlci5pc05hTihwYWdlKSkge1xuICAgICAgaWYgKHBhZ2UgPCAxKSB7XG4gICAgICAgIHBhZ2UgPSAxO1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IHBhZ2U7XG4gICAgICB9IGVsc2UgaWYgKHBhZ2UgPiB0aGlzLmRhdGEubGFzdF9wYWdlKSB7XG4gICAgICAgIHBhZ2UgPSB0aGlzLmRhdGEubGFzdF9wYWdlO1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IHBhZ2U7XG4gICAgICB9XG4gICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChwYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSB0aGlzLmRhdGEuY3VycmVudF9wYWdlO1xuICAgIH1cbiAgfVxufVxuIl19