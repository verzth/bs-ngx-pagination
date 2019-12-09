(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('bs-ngx-pagination', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['bs-ngx-pagination'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsNgxPaginationService = /** @class */ (function () {
        function BsNgxPaginationService() {
        }
        BsNgxPaginationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        BsNgxPaginationService.ctorParameters = function () { return []; };
        /** @nocollapse */ BsNgxPaginationService.ngInjectableDef = i0.defineInjectable({ factory: function BsNgxPaginationService_Factory() { return new BsNgxPaginationService(); }, token: BsNgxPaginationService, providedIn: "root" });
        return BsNgxPaginationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsNgxPaginationComponent = /** @class */ (function () {
        function BsNgxPaginationComponent() {
            this.pageChange = new i0.EventEmitter();
            this.perPageChange = new i0.EventEmitter();
            this.data = ( /** @type {?} */({}));
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
                    this.data.select_per_page_values.sort(( /**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */function (a, b) { return a - b; }));
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
            { type: i0.Component, args: [{
                        selector: 'bs-ngx-pagination',
                        template: "<div class=\"page-container d-flex justify-content-between align-items-center\">\r\n  <div class=\"form-group page-per-page\" *ngIf=\"data.select_per_page\">\r\n    <label>Per Page</label>\r\n    <select class=\"form-control\" name=\"per_page\" (change)=\"perPageChanged($event.target.value)\">\r\n      <option *ngFor=\"let pp of data.select_per_page_values\" [value]=\"pp\" [selected]=\"data.per_page==pp\">{{ pp }}</option>\r\n    </select>\r\n  </div>\r\n  <ul class=\"pagination justify-content-center align-items-center\">\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>1\">\r\n      <a class=\"page-link\" [href]=\"data.prev_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page-1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>1\" (click)=\"pageChanged(1);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>2\" (click)=\"pageChanged(2);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page==7\" (click)=\"pageChanged(3);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"data.current_page>7\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>5\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-3 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-2);$event.preventDefault();\">{{ data.current_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page>3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-1);$event.preventDefault();\">{{ data.current_page-1 }}</a></li>\r\n\r\n    <li class=\"page-item active\"><a class=\"page-link\" href=\"#\" (click)=\"$event.preventDefault()\">{{ data.current_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-2\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">{{ data.current_page+1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+2);$event.preventDefault();\">{{ data.current_page+2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+3);$event.preventDefault();\">{{ data.current_page+3 }}</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"data.current_page<data.last_page-6\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page==data.last_page-6\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-2);$event.preventDefault();\">{{ data.last_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-1\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-1);$event.preventDefault();\">{{ data.last_page-1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page);$event.preventDefault();\">{{ data.last_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\">\r\n      <a class=\"page-link\" [href]=\"data.next_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"form-group page-input\" *ngIf=\"data.input_page\">\r\n    <label>Page</label>\r\n    <input class=\"form-control\" name=\"page\" (blur)=\"inputPageChanged($event)\" (keyup.enter)=\"$event.target.blur()\" [value]=\"data.current_page\">\r\n  </div>\r\n</div>\r\n",
                        styles: [".page-container{padding:10px 20px}.page-container .page-input>label,.page-container .page-per-page>label{font-size:11px}.page-container .page-input{text-align:right;max-width:70px}"]
                    }] }
        ];
        /** @nocollapse */
        BsNgxPaginationComponent.ctorParameters = function () { return []; };
        BsNgxPaginationComponent.propDecorators = {
            pageChange: [{ type: i0.Output }],
            perPageChange: [{ type: i0.Output }],
            data: [{ type: i0.Input }]
        };
        return BsNgxPaginationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsNgxPaginationModule = /** @class */ (function () {
        function BsNgxPaginationModule() {
        }
        BsNgxPaginationModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [BsNgxPaginationComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [BsNgxPaginationComponent]
                    },] }
        ];
        return BsNgxPaginationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.BsNgxPaginationService = BsNgxPaginationService;
    exports.BsNgxPaginationComponent = BsNgxPaginationComponent;
    exports.BsNgxPaginationModule = BsNgxPaginationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=bs-ngx-pagination.umd.js.map