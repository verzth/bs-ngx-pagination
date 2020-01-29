/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class NgxBootstrapPaginationComponent {
    constructor() {
        this.pageChange = new EventEmitter();
        this.perPageChange = new EventEmitter();
        this.dataChange = new EventEmitter();
        this.dataValue = (/** @type {?} */ ({}));
        this.selectPerPage = true;
        this.selectPerPageValues = [10, 20, 50, 100, 250];
        this.inputPage = true;
    }
    /**
     * @return {?}
     */
    get data() {
        return this.data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this.dataValue = val;
        this.normalizeData();
        this.dataChange.emit(val);
    }
    /**
     * @private
     * @return {?}
     */
    normalizeData() {
        if (this.selectPerPageValues.indexOf(+this.dataValue.per_page) === -1) {
            this.selectPerPageValues.push(+this.dataValue.per_page);
            this.selectPerPageValues.sort((/**
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
        else if (page > this.dataValue.last_page) {
            page = this.dataValue.last_page;
        }
        this.pageChange.emit(page);
    }
    /**
     * @param {?} count
     * @return {?}
     */
    perPageChanged(count) {
        if (this.dataValue.per_page !== count) {
            this.perPageChange.emit(+count);
        }
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
            else if (page > this.dataValue.last_page) {
                page = this.dataValue.last_page;
                e.target.value = page;
            }
            this.pageChange.emit(page);
        }
        else {
            e.target.value = this.dataValue.current_page;
        }
    }
}
NgxBootstrapPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-bootstrap-pagination',
                template: "<div class=\"page-container d-flex justify-content-between align-items-center\">\r\n  <div class=\"form-group page-per-page\" *ngIf=\"selectPerPage\">\r\n    <label>Per Page</label>\r\n    <select class=\"form-control\" name=\"per_page\" (blur)=\"perPageChanged($event.target.value)\" (keyup.enter)=\"$event.target.blur()\">\r\n      <option *ngFor=\"let pp of selectPerPageValues\" [value]=\"pp\" [selected]=\"dataValue.per_page==pp\">{{ pp }}</option>\r\n    </select>\r\n  </div>\r\n  <ul class=\"pagination justify-content-center align-items-center\">\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>1\">\r\n      <a class=\"page-link\" [href]=\"dataValue.prev_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(dataValue.current_page-1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>1\" (click)=\"pageChanged(1);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>2\" (click)=\"pageChanged(2);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page==7\" (click)=\"pageChanged(3);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"dataValue.current_page>7\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>5\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page-3);$event.preventDefault();\">{{ dataValue.current_page-3 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page-2);$event.preventDefault();\">{{ dataValue.current_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page-1);$event.preventDefault();\">{{ dataValue.current_page-1 }}</a></li>\r\n\r\n    <li class=\"page-item active\"><a class=\"page-link\" href=\"#\" (click)=\"$event.preventDefault()\">{{ dataValue.current_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-2\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page+1);$event.preventDefault();\">{{ dataValue.current_page+1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page+2);$event.preventDefault();\">{{ dataValue.current_page+2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page+3);$event.preventDefault();\">{{ dataValue.current_page+3 }}</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"dataValue.current_page<dataValue.last_page-6\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page==dataValue.last_page-6\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.last_page-2);$event.preventDefault();\">{{ dataValue.last_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-1\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.last_page-1);$event.preventDefault();\">{{ dataValue.last_page-1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.last_page);$event.preventDefault();\">{{ dataValue.last_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page\">\r\n      <a class=\"page-link\" [href]=\"dataValue.next_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(dataValue.current_page+1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"form-group page-input\" *ngIf=\"inputPage\">\r\n    <label>Page</label>\r\n    <input class=\"form-control\" name=\"page\" (blur)=\"inputPageChanged($event)\" (keyup.enter)=\"$event.target.blur()\" [value]=\"dataValue.current_page\">\r\n  </div>\r\n</div>\r\n",
                styles: [".page-container{padding:10px 20px}.page-container .page-input>label,.page-container .page-per-page>label{font-size:11px}.page-container .page-input{text-align:right;max-width:70px}"]
            }] }
];
/** @nocollapse */
NgxBootstrapPaginationComponent.ctorParameters = () => [];
NgxBootstrapPaginationComponent.propDecorators = {
    pageChange: [{ type: Output }],
    perPageChange: [{ type: Output }],
    dataChange: [{ type: Output }],
    selectPerPage: [{ type: Input }],
    selectPerPageValues: [{ type: Input }],
    inputPage: [{ type: Input }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxBootstrapPaginationComponent.prototype.pageChange;
    /** @type {?} */
    NgxBootstrapPaginationComponent.prototype.perPageChange;
    /** @type {?} */
    NgxBootstrapPaginationComponent.prototype.dataChange;
    /** @type {?} */
    NgxBootstrapPaginationComponent.prototype.dataValue;
    /** @type {?} */
    NgxBootstrapPaginationComponent.prototype.selectPerPage;
    /** @type {?} */
    NgxBootstrapPaginationComponent.prototype.selectPerPageValues;
    /** @type {?} */
    NgxBootstrapPaginationComponent.prototype.inputPage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2ZXJ6dGgvbmd4LWJvb3RzdHJhcC1wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsibGliL25neC1ib290c3RyYXAtcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFVckUsTUFBTSxPQUFPLCtCQUErQjtJQVExQztRQVBVLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3hDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNsRCxjQUFTLEdBQWUsbUJBQUEsRUFBRSxFQUFjLENBQUM7UUFDaEMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsd0JBQW1CLEdBQWtCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVELGNBQVMsR0FBRyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7O0lBRWhCLElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7OztJQUNELElBQUksSUFBSSxDQUFDLEdBQUc7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFDTyxhQUFhO1FBQ25CLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDckUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUk7Ozs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDOzs7OztJQUNELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjthQUFNLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBQ0QsY0FBYyxDQUFDLEtBQWE7UUFDMUIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsQ0FBQzs7WUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNaLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUMxQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUN2QjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztTQUM5QztJQUNILENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsbzlJQUFzRDs7YUFJdkQ7Ozs7O3lCQUVFLE1BQU07NEJBQ04sTUFBTTt5QkFDTixNQUFNOzRCQUVOLEtBQUs7a0NBQ0wsS0FBSzt3QkFDTCxLQUFLO21CQUdMLEtBQUs7Ozs7SUFUTixxREFBa0Q7O0lBQ2xELHdEQUFxRDs7SUFDckQscURBQWtEOztJQUNsRCxvREFBeUM7O0lBQ3pDLHdEQUE4Qjs7SUFDOUIsOERBQXFFOztJQUNyRSxvREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vbmd4LWJvb3RzdHJhcC1wYWdpbmF0aW9uLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1ib290c3RyYXAtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnbmd4LWJvb3RzdHJhcC1wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJ25neC1ib290c3RyYXAtcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcydcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hCb290c3RyYXBQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHBlclBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgZGF0YVZhbHVlOiBQYWdpbmF0aW9uID0ge30gYXMgUGFnaW5hdGlvbjtcbiAgQElucHV0KCkgc2VsZWN0UGVyUGFnZSA9IHRydWU7XG4gIEBJbnB1dCgpIHNlbGVjdFBlclBhZ2VWYWx1ZXM6IEFycmF5PG51bWJlcj4gPSBbMTAsIDIwLCA1MCwgMTAwLCAyNTBdO1xuICBASW5wdXQoKSBpbnB1dFBhZ2UgPSB0cnVlO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICBzZXQgZGF0YSh2YWwpIHtcbiAgICB0aGlzLmRhdGFWYWx1ZSA9IHZhbDtcbiAgICB0aGlzLm5vcm1hbGl6ZURhdGEoKTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh2YWwpO1xuICB9XG4gIHByaXZhdGUgbm9ybWFsaXplRGF0YSgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RQZXJQYWdlVmFsdWVzLmluZGV4T2YoK3RoaXMuZGF0YVZhbHVlLnBlcl9wYWdlKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2VsZWN0UGVyUGFnZVZhbHVlcy5wdXNoKCt0aGlzLmRhdGFWYWx1ZS5wZXJfcGFnZSk7XG4gICAgICB0aGlzLnNlbGVjdFBlclBhZ2VWYWx1ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIH1cbiAgfVxuICBwYWdlQ2hhbmdlZChwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAocGFnZSA8IDEpIHtcbiAgICAgIHBhZ2UgPSAxO1xuICAgIH0gZWxzZSBpZiAocGFnZSA+IHRoaXMuZGF0YVZhbHVlLmxhc3RfcGFnZSkge1xuICAgICAgcGFnZSA9IHRoaXMuZGF0YVZhbHVlLmxhc3RfcGFnZTtcbiAgICB9XG4gICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSk7XG4gIH1cbiAgcGVyUGFnZUNoYW5nZWQoY291bnQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmRhdGFWYWx1ZS5wZXJfcGFnZSAhPT0gY291bnQpIHtcbiAgICAgIHRoaXMucGVyUGFnZUNoYW5nZS5lbWl0KCtjb3VudCk7XG4gICAgfVxuICB9XG4gIGlucHV0UGFnZUNoYW5nZWQoZSkge1xuICAgIGxldCBwYWdlID0gK2UudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKHBhZ2UpKSB7XG4gICAgICBpZiAocGFnZSA8IDEpIHtcbiAgICAgICAgcGFnZSA9IDE7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gcGFnZTtcbiAgICAgIH0gZWxzZSBpZiAocGFnZSA+IHRoaXMuZGF0YVZhbHVlLmxhc3RfcGFnZSkge1xuICAgICAgICBwYWdlID0gdGhpcy5kYXRhVmFsdWUubGFzdF9wYWdlO1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IHBhZ2U7XG4gICAgICB9XG4gICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChwYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSB0aGlzLmRhdGFWYWx1ZS5jdXJyZW50X3BhZ2U7XG4gICAgfVxuICB9XG59XG4iXX0=