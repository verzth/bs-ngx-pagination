import { Injectable, NgModule, Component, EventEmitter, Input, Output, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsNgxPaginationService {
    constructor() { }
}
BsNgxPaginationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BsNgxPaginationService.ctorParameters = () => [];
/** @nocollapse */ BsNgxPaginationService.ngInjectableDef = defineInjectable({ factory: function BsNgxPaginationService_Factory() { return new BsNgxPaginationService(); }, token: BsNgxPaginationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsNgxPaginationComponent {
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
                template: "<ul class=\"pagination justify-content-center\">\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>1\">\r\n    <a class=\"page-link\" [href]=\"data.prev_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page-1);$event.preventDefault();\">\r\n      <span aria-hidden=\"true\">&laquo;</span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>1\" (click)=\"pageChanged(1);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>2\" (click)=\"pageChanged(2);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page==7\" (click)=\"pageChanged(3);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\r\n  <li class=\"page-item disabled\" *ngIf=\"data.current_page>7\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>5\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-3 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-2);$event.preventDefault();\">{{ data.current_page-2 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-1);$event.preventDefault();\">{{ data.current_page-1 }}</a></li>\r\n\r\n  <li class=\"page-item active\"><a class=\"page-link\" href=\"#\" (click)=\"$event.preventDefault()\">{{ data.current_page }}</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-2\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">{{ data.current_page+1 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+2);$event.preventDefault();\">{{ data.current_page+2 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+3);$event.preventDefault();\">{{ data.current_page+3 }}</a></li>\r\n\r\n  <li class=\"page-item disabled\" *ngIf=\"data.current_page<data.last_page-6\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page==data.last_page-6\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-2);$event.preventDefault();\">{{ data.last_page-2 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-1\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-1);$event.preventDefault();\">{{ data.last_page-1 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page);$event.preventDefault();\">{{ data.last_page }}</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\">\r\n    <a class=\"page-link\" [href]=\"data.next_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">\r\n      <span aria-hidden=\"true\">&raquo;</span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
BsNgxPaginationComponent.ctorParameters = () => [];
BsNgxPaginationComponent.propDecorators = {
    pageChange: [{ type: Output }],
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsNgxPaginationModule {
}
BsNgxPaginationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BsNgxPaginationComponent],
                imports: [
                    CommonModule
                ],
                exports: [BsNgxPaginationComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BsNgxPaginationService, BsNgxPaginationComponent, BsNgxPaginationModule };

//# sourceMappingURL=bs-ngx-pagination.js.map