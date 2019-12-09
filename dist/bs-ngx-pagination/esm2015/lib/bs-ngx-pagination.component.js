/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class BsNgxPaginationComponent {
    constructor() {
        this.pageChange = new EventEmitter();
        this.perPageChange = new EventEmitter();
        this.data = (/** @type {?} */ ({}));
    }
    /**
     * @return {?}
     */
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
        if (this.data.select_per_page_values.indexOf(this.data.per_page) === -1) {
            this.data.select_per_page_values.push(+this.data.per_page);
            this.data.select_per_page_values.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a - b));
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChanged(page) {
        if (page < 1) {
            page = 1;
        }
        else if (page > this.data.last_page) {
            page = this.data.last_page;
        }
        this.pageChange.emit(page);
    }
    /**
     * @param {?} count
     * @return {?}
     */
    perPageChanged(count) {
        this.perPageChange.emit(count);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    inputPageChanged(e) {
        /** @type {?} */
        let page = +e.target.value;
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
    }
}
BsNgxPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-ngx-pagination',
                template: "<div class=\"page-container d-flex justify-content-between align-items-center\">\r\n  <div class=\"form-group page-per-page\" *ngIf=\"data.select_per_page\">\r\n    <label>Per Page</label>\r\n    <select class=\"form-control\" name=\"per_page\" (change)=\"perPageChanged($event.target.value)\">\r\n      <option *ngFor=\"let pp of data.select_per_page_values\" [value]=\"pp\" [selected]=\"data.per_page==pp\">{{ pp }}</option>\r\n    </select>\r\n  </div>\r\n  <ul class=\"pagination justify-content-center align-items-center\">\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>1\">\r\n      <a class=\"page-link\" [href]=\"data.prev_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page-1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>1\" (click)=\"pageChanged(1);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>2\" (click)=\"pageChanged(2);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page==7\" (click)=\"pageChanged(3);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"data.current_page>7\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>5\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-3 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-2);$event.preventDefault();\">{{ data.current_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-1);$event.preventDefault();\">{{ data.current_page-1 }}</a></li>\r\n\r\n    <li class=\"page-item active\"><a class=\"page-link\" href=\"#\" (click)=\"$event.preventDefault()\">{{ data.current_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-2\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">{{ data.current_page+1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+2);$event.preventDefault();\">{{ data.current_page+2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+3);$event.preventDefault();\">{{ data.current_page+3 }}</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"data.current_page<data.last_page-6\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page==data.last_page-6\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-2);$event.preventDefault();\">{{ data.last_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-1\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-1);$event.preventDefault();\">{{ data.last_page-1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page);$event.preventDefault();\">{{ data.last_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\">\r\n      <a class=\"page-link\" [href]=\"data.next_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"form-group page-input\" *ngIf=\"data.input_page\">\r\n    <label>Page</label>\r\n    <input class=\"form-control\" name=\"page\" (blur)=\"inputPageChanged($event)\" (keyup.enter)=\"$event.target.blur()\" [value]=\"data.current_page\">\r\n  </div>\r\n</div>\r\n",
                styles: [".page-container{padding:10px 20px}.page-container .page-input>label,.page-container .page-per-page>label{font-size:11px}.page-container .page-input{text-align:right;max-width:70px}"]
            }] }
];
/** @nocollapse */
BsNgxPaginationComponent.ctorParameters = () => [];
BsNgxPaginationComponent.propDecorators = {
    pageChange: [{ type: Output }],
    perPageChange: [{ type: Output }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BsNgxPaginationComponent.prototype.pageChange;
    /** @type {?} */
    BsNgxPaginationComponent.prototype.perPageChange;
    /** @type {?} */
    BsNgxPaginationComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnMtbmd4LXBhZ2luYXRpb24vIiwic291cmNlcyI6WyJsaWIvYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBVTdFLE1BQU0sT0FBTyx3QkFBd0I7SUFJbkM7UUFIVSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUMsU0FBSSxHQUFlLG1CQUFBLEVBQUUsRUFBYyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFaEIsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ25HLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSTs7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7O0lBQ0QsV0FBVyxDQUFDLElBQVk7UUFDdEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNWO2FBQU0sSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCxjQUFjLENBQUMsS0FBYTtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUNELGdCQUFnQixDQUFDLENBQUM7O1lBQ1osSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFBTSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMzQixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0wsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLCtzSUFBK0M7O2FBSWhEOzs7Ozt5QkFFRSxNQUFNOzRCQUNOLE1BQU07bUJBQ04sS0FBSzs7OztJQUZOLDhDQUFrRDs7SUFDbEQsaURBQXFEOztJQUNyRCx3Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9icy1uZ3gtcGFnaW5hdGlvbi5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1uZ3gtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQnNOZ3hQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHBlclBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQElucHV0KCkgZGF0YTogUGFnaW5hdGlvbiA9IHt9IGFzIFBhZ2luYXRpb247XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kYXRhLnNlbGVjdF9wZXJfcGFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRhdGEuc2VsZWN0X3Blcl9wYWdlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5pbnB1dF9wYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGF0YS5pbnB1dF9wYWdlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5zZWxlY3RfcGVyX3BhZ2VfdmFsdWVzID09PSB1bmRlZmluZWQgfHwgdGhpcy5kYXRhLnNlbGVjdF9wZXJfcGFnZV92YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmRhdGEuc2VsZWN0X3Blcl9wYWdlX3ZhbHVlcyA9IFsxMCwgMjAsIDUwLCAxMDAsIDI1MF07XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEuc2VsZWN0X3Blcl9wYWdlX3ZhbHVlcy5pbmRleE9mKHRoaXMuZGF0YS5wZXJfcGFnZSkgPT09IC0xKSB7XG4gICAgICB0aGlzLmRhdGEuc2VsZWN0X3Blcl9wYWdlX3ZhbHVlcy5wdXNoKCt0aGlzLmRhdGEucGVyX3BhZ2UpO1xuICAgICAgdGhpcy5kYXRhLnNlbGVjdF9wZXJfcGFnZV92YWx1ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIH1cbiAgfVxuICBwYWdlQ2hhbmdlZChwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAocGFnZSA8IDEpIHtcbiAgICAgIHBhZ2UgPSAxO1xuICAgIH0gZWxzZSBpZiAocGFnZSA+IHRoaXMuZGF0YS5sYXN0X3BhZ2UpIHtcbiAgICAgIHBhZ2UgPSB0aGlzLmRhdGEubGFzdF9wYWdlO1xuICAgIH1cbiAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChwYWdlKTtcbiAgfVxuICBwZXJQYWdlQ2hhbmdlZChjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5wZXJQYWdlQ2hhbmdlLmVtaXQoY291bnQpO1xuICB9XG4gIGlucHV0UGFnZUNoYW5nZWQoZSkge1xuICAgIGxldCBwYWdlID0gK2UudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKHBhZ2UpKSB7XG4gICAgICBpZiAocGFnZSA8IDEpIHtcbiAgICAgICAgcGFnZSA9IDE7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gcGFnZTtcbiAgICAgIH0gZWxzZSBpZiAocGFnZSA+IHRoaXMuZGF0YS5sYXN0X3BhZ2UpIHtcbiAgICAgICAgcGFnZSA9IHRoaXMuZGF0YS5sYXN0X3BhZ2U7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gcGFnZTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHBhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnRhcmdldC52YWx1ZSA9IHRoaXMuZGF0YS5jdXJyZW50X3BhZ2U7XG4gICAgfVxuICB9XG59XG4iXX0=