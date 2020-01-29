import { Injectable, NgModule, Component, EventEmitter, Input, Output, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxBootstrapPaginationService = /** @class */ (function () {
    function NgxBootstrapPaginationService() {
    }
    NgxBootstrapPaginationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxBootstrapPaginationService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxBootstrapPaginationService.ngInjectableDef = defineInjectable({ factory: function NgxBootstrapPaginationService_Factory() { return new NgxBootstrapPaginationService(); }, token: NgxBootstrapPaginationService, providedIn: "root" });
    return NgxBootstrapPaginationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxBootstrapPaginationComponent = /** @class */ (function () {
    function NgxBootstrapPaginationComponent() {
        this.pageChange = new EventEmitter();
        this.perPageChange = new EventEmitter();
        this.dataChange = new EventEmitter();
        this.dataValue = (/** @type {?} */ ({}));
        this.selectPerPage = true;
        this.selectPerPageValues = [10, 20, 50, 100, 250];
        this.inputPage = true;
    }
    Object.defineProperty(NgxBootstrapPaginationComponent.prototype, "data", {
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
    NgxBootstrapPaginationComponent.prototype.normalizeData = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.selectPerPageValues.indexOf(+this.dataValue.per_page) === -1) {
            this.selectPerPageValues.push(+this.dataValue.per_page);
            this.selectPerPageValues.sort((/**
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
    NgxBootstrapPaginationComponent.prototype.pageChanged = /**
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
    NgxBootstrapPaginationComponent.prototype.perPageChanged = /**
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
    NgxBootstrapPaginationComponent.prototype.inputPageChanged = /**
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
    NgxBootstrapPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-bootstrap-pagination',
                    template: "<div class=\"page-container d-flex justify-content-between align-items-center\">\r\n  <div class=\"form-group page-per-page\" *ngIf=\"selectPerPage\">\r\n    <label>Per Page</label>\r\n    <select class=\"form-control\" name=\"per_page\" (blur)=\"perPageChanged($event.target.value)\" (keyup.enter)=\"$event.target.blur()\">\r\n      <option *ngFor=\"let pp of selectPerPageValues\" [value]=\"pp\" [selected]=\"dataValue.per_page==pp\">{{ pp }}</option>\r\n    </select>\r\n  </div>\r\n  <ul class=\"pagination justify-content-center align-items-center\">\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>1\">\r\n      <a class=\"page-link\" [href]=\"dataValue.prev_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(dataValue.current_page-1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>1\" (click)=\"pageChanged(1);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>2\" (click)=\"pageChanged(2);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page==7\" (click)=\"pageChanged(3);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"dataValue.current_page>7\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>5\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page-3);$event.preventDefault();\">{{ dataValue.current_page-3 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page-2);$event.preventDefault();\">{{ dataValue.current_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page>3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page-1);$event.preventDefault();\">{{ dataValue.current_page-1 }}</a></li>\r\n\r\n    <li class=\"page-item active\"><a class=\"page-link\" href=\"#\" (click)=\"$event.preventDefault()\">{{ dataValue.current_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-2\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page+1);$event.preventDefault();\">{{ dataValue.current_page+1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page+2);$event.preventDefault();\">{{ dataValue.current_page+2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.current_page+3);$event.preventDefault();\">{{ dataValue.current_page+3 }}</a></li>\r\n\r\n    <li class=\"page-item disabled\" *ngIf=\"dataValue.current_page<dataValue.last_page-6\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page==dataValue.last_page-6\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.last_page-2);$event.preventDefault();\">{{ dataValue.last_page-2 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page-1\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.last_page-1);$event.preventDefault();\">{{ dataValue.last_page-1 }}</a></li>\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(dataValue.last_page);$event.preventDefault();\">{{ dataValue.last_page }}</a></li>\r\n\r\n    <li class=\"page-item\" *ngIf=\"dataValue.current_page<dataValue.last_page\">\r\n      <a class=\"page-link\" [href]=\"dataValue.next_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(dataValue.current_page+1);$event.preventDefault();\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"form-group page-input\" *ngIf=\"inputPage\">\r\n    <label>Page</label>\r\n    <input class=\"form-control\" name=\"page\" (blur)=\"inputPageChanged($event)\" (keyup.enter)=\"$event.target.blur()\" [value]=\"dataValue.current_page\">\r\n  </div>\r\n</div>\r\n",
                    styles: [".page-container{padding:10px 20px}.page-container .page-input>label,.page-container .page-per-page>label{font-size:11px}.page-container .page-input{text-align:right;max-width:70px}"]
                }] }
    ];
    /** @nocollapse */
    NgxBootstrapPaginationComponent.ctorParameters = function () { return []; };
    NgxBootstrapPaginationComponent.propDecorators = {
        pageChange: [{ type: Output }],
        perPageChange: [{ type: Output }],
        dataChange: [{ type: Output }],
        selectPerPage: [{ type: Input }],
        selectPerPageValues: [{ type: Input }],
        inputPage: [{ type: Input }],
        data: [{ type: Input }]
    };
    return NgxBootstrapPaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxBootstrapPaginationModule = /** @class */ (function () {
    function NgxBootstrapPaginationModule() {
    }
    NgxBootstrapPaginationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxBootstrapPaginationComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [NgxBootstrapPaginationComponent]
                },] }
    ];
    return NgxBootstrapPaginationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxBootstrapPaginationService, NgxBootstrapPaginationComponent, NgxBootstrapPaginationModule };

//# sourceMappingURL=verzth-ngx-bootstrap-pagination.js.map