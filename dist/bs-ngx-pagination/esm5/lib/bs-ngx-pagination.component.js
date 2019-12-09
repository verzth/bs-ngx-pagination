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
        if (this.dataValue.select_per_page_values.indexOf(this.dataValue.per_page) === -1) {
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
        this.perPageChange.emit(+count);
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
                    template: "<div class=\"page-container d-flex justify-content-between align-items-center\">\r\n  <div class=\"form-group page-per-page\" *ngIf=\"dataValue.select_per_page\">\r\n    <label>Per Page</label>\r\n    <select class=\"form-control\" name=\"per_page\" (change)=\"perPageChanged($event.target.value)\">\r\n      <option *ngFor=\"let pp of dataValue.select_per_page_values\" [value]=\"pp\" [selected]=\"dataValue.per_page==pp\">{{ pp }}</option>\r\n    </select>\r\n  </div>\r\n  <ul class=\"pagination justify-content-center align-items-center\">\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>1\">\r\n      <a class=\"page-link\" [href]=\"dataValue.prev_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(dataValue.current_page-1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>1\" (click)=\"pageChanged(1);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>2\" (click)=\"pageChanged(2);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page==7\" (click)=\"pageChanged(3);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"dataValue.current_page>7\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>5\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page-3);$event.preventDefault();\">{{ dataValue.current_page-3 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page-2);$event.preventDefault();\">{{ dataValue.current_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page-1);$event.preventDefault();\">{{ dataValue.current_page-1 }}</a></li>\r\n\r\n    <li class=\"page-item active\"><a class=\"page-link\" href=\"#\" (click)=\"$event.preventDefault()\">{{ dataValue.current_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-2\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page+1);$event.preventDefault();\">{{ dataValue.current_page+1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page+2);$event.preventDefault();\">{{ dataValue.current_page+2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page+3);$event.preventDefault();\">{{ dataValue.current_page+3 }}</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"dataValue.current_page<dataValue.last_page-6\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page==dataValue.last_page-6\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.last_page-2);$event.preventDefault();\">{{ dataValue.last_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-1\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.last_page-1);$event.preventDefault();\">{{ dataValue.last_page-1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.last_page);$event.preventDefault();\">{{ dataValue.last_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page\">\r\n      <a class=\"page-link\" [href]=\"dataValue.next_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(dataValue.current_page+1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"form-group page-input\" *ngIf=\"dataValue.input_page\">\r\n    <label>Page</label>\r\n    <input class=\"form-control\" name=\"page\" (blur)=\"inputPageChanged($event)\" (keyup.enter)=\"$event.target.blur()\" [value]=\"dataValue.current_page\">\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnMtbmd4LXBhZ2luYXRpb24vIiwic291cmNlcyI6WyJsaWIvYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3JFO0lBWUU7UUFKVSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDM0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbEQsY0FBUyxHQUFlLG1CQUFBLEVBQUUsRUFBYyxDQUFDO0lBQzFCLENBQUM7SUFFaEIsc0JBQ0ksMENBQUk7Ozs7UUFEUjtZQUVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7OztRQUNELFVBQVMsR0FBRztZQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FMQTs7Ozs7SUFNTyxnREFBYTs7OztJQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEtBQUssU0FBUyxFQUFFO1lBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsSUFBSTs7Ozs7WUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssRUFBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7Ozs7SUFDRCw4Q0FBVzs7OztJQUFYLFVBQVksSUFBWTtRQUN0QixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ1Y7YUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUMxQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUNELGlEQUFjOzs7O0lBQWQsVUFBZSxLQUFhO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFDRCxtREFBZ0I7Ozs7SUFBaEIsVUFBaUIsQ0FBQzs7WUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNaLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUMxQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUN2QjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztTQUM5QztJQUNILENBQUM7O2dCQS9ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbTlJQUErQzs7aUJBSWhEOzs7Ozs2QkFFRSxNQUFNO2dDQUNOLE1BQU07NkJBQ04sTUFBTTt1QkFJTixLQUFLOztJQWtEUiwrQkFBQztDQUFBLEFBaEVELElBZ0VDO1NBekRZLHdCQUF3Qjs7O0lBQ25DLDhDQUFrRDs7SUFDbEQsaURBQXFEOztJQUNyRCw4Q0FBa0Q7O0lBQ2xELDZDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9icy1uZ3gtcGFnaW5hdGlvbi5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1uZ3gtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQnNOZ3hQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHBlclBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgZGF0YVZhbHVlOiBQYWdpbmF0aW9uID0ge30gYXMgUGFnaW5hdGlvbjtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgc2V0IGRhdGEodmFsKSB7XG4gICAgdGhpcy5kYXRhVmFsdWUgPSB2YWw7XG4gICAgdGhpcy5ub3JtYWxpemVEYXRhKCk7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodmFsKTtcbiAgfVxuICBwcml2YXRlIG5vcm1hbGl6ZURhdGEoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVZhbHVlLnNlbGVjdF9wZXJfcGFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRhdGFWYWx1ZS5zZWxlY3RfcGVyX3BhZ2UgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhVmFsdWUuaW5wdXRfcGFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRhdGFWYWx1ZS5pbnB1dF9wYWdlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVZhbHVlLnNlbGVjdF9wZXJfcGFnZV92YWx1ZXMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmRhdGFWYWx1ZS5zZWxlY3RfcGVyX3BhZ2VfdmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5kYXRhVmFsdWUuc2VsZWN0X3Blcl9wYWdlX3ZhbHVlcyA9IFsxMCwgMjAsIDUwLCAxMDAsIDI1MF07XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFWYWx1ZS5zZWxlY3RfcGVyX3BhZ2VfdmFsdWVzLmluZGV4T2YodGhpcy5kYXRhVmFsdWUucGVyX3BhZ2UpID09PSAtMSkge1xuICAgICAgdGhpcy5kYXRhVmFsdWUuc2VsZWN0X3Blcl9wYWdlX3ZhbHVlcy5wdXNoKCt0aGlzLmRhdGFWYWx1ZS5wZXJfcGFnZSk7XG4gICAgICB0aGlzLmRhdGFWYWx1ZS5zZWxlY3RfcGVyX3BhZ2VfdmFsdWVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9XG4gIH1cbiAgcGFnZUNoYW5nZWQocGFnZTogbnVtYmVyKSB7XG4gICAgaWYgKHBhZ2UgPCAxKSB7XG4gICAgICBwYWdlID0gMTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPiB0aGlzLmRhdGFWYWx1ZS5sYXN0X3BhZ2UpIHtcbiAgICAgIHBhZ2UgPSB0aGlzLmRhdGFWYWx1ZS5sYXN0X3BhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHBhZ2UpO1xuICB9XG4gIHBlclBhZ2VDaGFuZ2VkKGNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnBlclBhZ2VDaGFuZ2UuZW1pdCgrY291bnQpO1xuICB9XG4gIGlucHV0UGFnZUNoYW5nZWQoZSkge1xuICAgIGxldCBwYWdlID0gK2UudGFyZ2V0LnZhbHVlO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKHBhZ2UpKSB7XG4gICAgICBpZiAocGFnZSA8IDEpIHtcbiAgICAgICAgcGFnZSA9IDE7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gcGFnZTtcbiAgICAgIH0gZWxzZSBpZiAocGFnZSA+IHRoaXMuZGF0YVZhbHVlLmxhc3RfcGFnZSkge1xuICAgICAgICBwYWdlID0gdGhpcy5kYXRhVmFsdWUubGFzdF9wYWdlO1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IHBhZ2U7XG4gICAgICB9XG4gICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChwYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS50YXJnZXQudmFsdWUgPSB0aGlzLmRhdGFWYWx1ZS5jdXJyZW50X3BhZ2U7XG4gICAgfVxuICB9XG59XG4iXX0=