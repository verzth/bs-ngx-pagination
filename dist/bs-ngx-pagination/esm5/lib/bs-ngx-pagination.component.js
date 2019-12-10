/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var BsNgxPaginationComponent = /** @class */ (function () {
    function BsNgxPaginationComponent() {
        this.pageChange = new EventEmitter();
        this.perPageChange = new EventEmitter();
        this.dataChange = new EventEmitter();
        this.dataValue = (/** @type {?} */ ({}));
    }
    Object.defineProperty(BsNgxPaginationComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.dataValue = val;
            this.normalizeData();
            this.dataChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    BsNgxPaginationComponent.prototype.normalizeData = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.dataValue.select_per_page === undefined) {
            this.dataValue.select_per_page = true;
        }
        if (this.dataValue.input_page === undefined) {
            this.dataValue.input_page = true;
        }
        if (this.dataValue.select_per_page_values === undefined || this.dataValue.select_per_page_values.length === 0) {
            this.dataValue.select_per_page_values = [10, 20, 50, 100, 250];
        }
        if (this.dataValue.select_per_page_values.indexOf(+this.dataValue.per_page) === -1) {
            this.dataValue.select_per_page_values.push(+this.dataValue.per_page);
            this.dataValue.select_per_page_values.sort((/**
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
        else if (page > this.dataValue.last_page) {
            page = this.dataValue.last_page;
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
        if (this.dataValue.per_page !== count) {
            this.perPageChange.emit(+count);
        }
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
            else if (page > this.dataValue.last_page) {
                page = this.dataValue.last_page;
                e.target.value = page;
            }
            this.pageChange.emit(page);
        }
        else {
            e.target.value = this.dataValue.current_page;
        }
    };
    BsNgxPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-ngx-pagination',
                    template: "<div class=\"page-container d-flex justify-content-between align-items-center\">\r\n  <div class=\"form-group page-per-page\" *ngIf=\"dataValue.select_per_page\">\r\n    <label>Per Page</label>\r\n    <select class=\"form-control\" name=\"per_page\" (blur)=\"perPageChanged($event.target.value)\" (keyup.enter)=\"$event.target.blur()\">\r\n      <option *ngFor=\"let pp of dataValue.select_per_page_values\" [value]=\"pp\" [selected]=\"dataValue.per_page==pp\">{{ pp }}</option>\r\n    </select>\r\n  </div>\r\n  <ul class=\"pagination justify-content-center align-items-center\">\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>1\">\r\n      <a class=\"page-link\" [href]=\"dataValue.prev_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(dataValue.current_page-1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>1\" (click)=\"pageChanged(1);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>2\" (click)=\"pageChanged(2);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page==7\" (click)=\"pageChanged(3);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"dataValue.current_page>7\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>5\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page-3);$event.preventDefault();\">{{ dataValue.current_page-3 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page-2);$event.preventDefault();\">{{ dataValue.current_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page-1);$event.preventDefault();\">{{ dataValue.current_page-1 }}</a></li>\r\n\r\n    <li class=\"page-item active\"><a class=\"page-link\" href=\"#\" (click)=\"$event.preventDefault()\">{{ dataValue.current_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-2\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page+1);$event.preventDefault();\">{{ dataValue.current_page+1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page+2);$event.preventDefault();\">{{ dataValue.current_page+2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page+3);$event.preventDefault();\">{{ dataValue.current_page+3 }}</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"dataValue.current_page<dataValue.last_page-6\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page==dataValue.last_page-6\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.last_page-2);$event.preventDefault();\">{{ dataValue.last_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-1\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.last_page-1);$event.preventDefault();\">{{ dataValue.last_page-1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.last_page);$event.preventDefault();\">{{ dataValue.last_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page\">\r\n      <a class=\"page-link\" [href]=\"dataValue.next_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(dataValue.current_page+1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"form-group page-input\" *ngIf=\"dataValue.input_page\">\r\n    <label>Page</label>\r\n    <input class=\"form-control\" name=\"page\" (blur)=\"inputPageChanged($event)\" (keyup.enter)=\"$event.target.blur()\" [value]=\"dataValue.current_page\">\r\n  </div>\r\n</div>\r\n",
                    styles: [".page-container{padding:10px 20px}.page-container .page-input>label,.page-container .page-per-page>label{font-size:11px}.page-container .page-input{text-align:right;max-width:70px}"]
                }] }
    ];
    /** @nocollapse */
    BsNgxPaginationComponent.ctorParameters = function () { return []; };
    BsNgxPaginationComponent.propDecorators = {
        pageChange: [{ type: Output }],
        perPageChange: [{ type: Output }],
        dataChange: [{ type: Output }],
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
    BsNgxPaginationComponent.prototype.dataChange;
    /** @type {?} */
    BsNgxPaginationComponent.prototype.dataValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnMtbmd4LXBhZ2luYXRpb24vIiwic291cmNlcyI6WyJsaWIvYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3JFO0lBWUU7UUFKVSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDM0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbEQsY0FBUyxHQUFlLG1CQUFBLEVBQUUsRUFBYyxDQUFDO0lBQzFCLENBQUM7SUFFaEIsc0JBQ0ksMENBQUk7Ozs7UUFEUjtZQUVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7OztRQUNELFVBQVMsR0FBRztZQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FMQTs7Ozs7SUFNTyxnREFBYTs7OztJQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEtBQUssU0FBUyxFQUFFO1lBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNsRixJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJOzs7OztZQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxFQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDOzs7OztJQUNELDhDQUFXOzs7O0lBQVgsVUFBWSxJQUFZO1FBQ3RCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjthQUFNLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBQ0QsaURBQWM7Ozs7SUFBZCxVQUFlLEtBQWE7UUFDMUIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBQ0QsbURBQWdCOzs7O0lBQWhCLFVBQWlCLENBQUM7O1lBQ1osSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFBTSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtnQkFDMUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0wsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7U0FDOUM7SUFDSCxDQUFDOztnQkFqRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHcvSUFBK0M7O2lCQUloRDs7Ozs7NkJBRUUsTUFBTTtnQ0FDTixNQUFNOzZCQUNOLE1BQU07dUJBSU4sS0FBSzs7SUFvRFIsK0JBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQTNEWSx3QkFBd0I7OztJQUNuQyw4Q0FBa0Q7O0lBQ2xELGlEQUFxRDs7SUFDckQsOENBQWtEOztJQUNsRCw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vYnMtbmd4LXBhZ2luYXRpb24uaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtbmd4LXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ2JzLW5neC1wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJ2JzLW5neC1wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJzTmd4UGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIEBPdXRwdXQoKSBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBwZXJQYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIGRhdGFWYWx1ZTogUGFnaW5hdGlvbiA9IHt9IGFzIFBhZ2luYXRpb247XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBASW5wdXQoKVxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIHNldCBkYXRhKHZhbCkge1xuICAgIHRoaXMuZGF0YVZhbHVlID0gdmFsO1xuICAgIHRoaXMubm9ybWFsaXplRGF0YSgpO1xuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHZhbCk7XG4gIH1cbiAgcHJpdmF0ZSBub3JtYWxpemVEYXRhKCkge1xuICAgIGlmICh0aGlzLmRhdGFWYWx1ZS5zZWxlY3RfcGVyX3BhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kYXRhVmFsdWUuc2VsZWN0X3Blcl9wYWdlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVZhbHVlLmlucHV0X3BhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kYXRhVmFsdWUuaW5wdXRfcGFnZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFWYWx1ZS5zZWxlY3RfcGVyX3BhZ2VfdmFsdWVzID09PSB1bmRlZmluZWQgfHwgdGhpcy5kYXRhVmFsdWUuc2VsZWN0X3Blcl9wYWdlX3ZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZGF0YVZhbHVlLnNlbGVjdF9wZXJfcGFnZV92YWx1ZXMgPSBbMTAsIDIwLCA1MCwgMTAwLCAyNTBdO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhVmFsdWUuc2VsZWN0X3Blcl9wYWdlX3ZhbHVlcy5pbmRleE9mKCt0aGlzLmRhdGFWYWx1ZS5wZXJfcGFnZSkgPT09IC0xKSB7XG4gICAgICB0aGlzLmRhdGFWYWx1ZS5zZWxlY3RfcGVyX3BhZ2VfdmFsdWVzLnB1c2goK3RoaXMuZGF0YVZhbHVlLnBlcl9wYWdlKTtcbiAgICAgIHRoaXMuZGF0YVZhbHVlLnNlbGVjdF9wZXJfcGFnZV92YWx1ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIH1cbiAgfVxuICBwYWdlQ2hhbmdlZChwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAocGFnZSA8IDEpIHtcbiAgICAgIHBhZ2UgPSAxO1xuICAgIH0gZWxzZSBpZiAocGFnZSA+IHRoaXMuZGF0YVZhbHVlLmxhc3RfcGFnZSkge1xuICAgICAgcGFnZSA9IHRoaXMuZGF0YVZhbHVlLmxhc3RfcGFnZTtcbiAgICB9XG4gICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSk7XG4gIH1cbiAgcGVyUGFnZUNoYW5nZWQoY291bnQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmRhdGFWYWx1ZS5wZXJfcGFnZSAhPT0gY291bnQpIHtcbiAgICAgIHRoaXMucGVyUGFnZUNoYW5nZS5lbWl0KCtjb3VudCk7XG4gICAgfVxuICB9XG4gIGlucHV0UGFnZUNoYW5nZWQoZSkge1xuICAgIGxldCBwYWdlID0gK2UudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKHBhZ2UpKSB7XG4gICAgICBpZiAocGFnZSA8IDEpIHtcbiAgICAgICAgcGFnZSA9IDE7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gcGFnZTtcbiAgICAgIH0gZWxzZSBpZiAocGFnZSA+IHRoaXMuZGF0YVZhbHVlLmxhc3RfcGFnZSkge1xuICAgICAgICBwYWdlID0gdGhpcy5kYXRhVmFsdWUubGFzdF9wYWdlO1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IHBhZ2U7XG4gICAgICB9XG4gICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChwYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSB0aGlzLmRhdGFWYWx1ZS5jdXJyZW50X3BhZ2U7XG4gICAgfVxuICB9XG59XG4iXX0=