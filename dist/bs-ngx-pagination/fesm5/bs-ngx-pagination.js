import { Injectable, Component, EventEmitter, Input, Output, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var BsNgxPaginationService = /** @class */ (function () {
    function BsNgxPaginationService() {
    }
    BsNgxPaginationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BsNgxPaginationService.ctorParameters = function () { return []; };
    /** @nocollapse */ BsNgxPaginationService.ngInjectableDef = defineInjectable({ factory: function BsNgxPaginationService_Factory() { return new BsNgxPaginationService(); }, token: BsNgxPaginationService, providedIn: "root" });
    return BsNgxPaginationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var BsNgxPaginationComponent = /** @class */ (function () {
    function BsNgxPaginationComponent() {
        this.pageChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    BsNgxPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
        this.pageChange.emit(page);
    };
    BsNgxPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-ngx-pagination',
                    template: "<ul class=\"pagination justify-content-center\">\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>1\">\r\n    <a class=\"page-link\" [href]=\"data.prev_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page-1);$event.preventDefault();\">\r\n      <span aria-hidden=\"true\">&laquo;</span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>1\" (click)=\"pageChanged(1);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>2\" (click)=\"pageChanged(2);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page==7\" (click)=\"pageChanged(3);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\r\n  <li class=\"page-item disabled\" *ngIf=\"data.current_page>7\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>5\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-3 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-2 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-1 }}</a></li>\r\n\r\n  <li class=\"page-item active\"><a class=\"page-link\" href=\"#\" (click)=\"$event.preventDefault()\">{{ data.current_page }}</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-2\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">{{ data.current_page+1 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+2);$event.preventDefault();\">{{ data.current_page+2 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+3);$event.preventDefault();\">{{ data.current_page+3 }}</a></li>\r\n\r\n  <li class=\"page-item disabled\" *ngIf=\"data.current_page<data.last_page-6\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page==data.last_page-6\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-2);$event.preventDefault();\">{{ data.last_page-2 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-1\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-1);$event.preventDefault();\">{{ data.last_page-1 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page);$event.preventDefault();\">{{ data.last_page }}</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\">\r\n    <a class=\"page-link\" [href]=\"data.next_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">\r\n      <span aria-hidden=\"true\">&raquo;</span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    BsNgxPaginationComponent.ctorParameters = function () { return []; };
    BsNgxPaginationComponent.propDecorators = {
        pageChange: [{ type: Output }],
        data: [{ type: Input }]
    };
    return BsNgxPaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var BsNgxPaginationModule = /** @class */ (function () {
    function BsNgxPaginationModule() {
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
    return BsNgxPaginationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { BsNgxPaginationService, BsNgxPaginationComponent, BsNgxPaginationModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbmd4LXBhZ2luYXRpb24uanMubWFwIiwic291cmNlcyI6WyJuZzovL2JzLW5neC1wYWdpbmF0aW9uL2xpYi9icy1uZ3gtcGFnaW5hdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9icy1uZ3gtcGFnaW5hdGlvbi9saWIvYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9icy1uZ3gtcGFnaW5hdGlvbi9saWIvYnMtbmd4LXBhZ2luYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQnNOZ3hQYWdpbmF0aW9uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL2JzLW5neC1wYWdpbmF0aW9uLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLW5neC1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICdicy1uZ3gtcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICdicy1uZ3gtcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcydcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCc05neFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBASW5wdXQoKSBkYXRhOiBQYWdpbmF0aW9uO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIHBhZ2VDaGFuZ2VkKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHBhZ2UpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc05neFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2JzLW5neC1wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQnNOZ3hQYWdpbmF0aW9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbQnNOZ3hQYWdpbmF0aW9uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCc05neFBhZ2luYXRpb25Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztpQ0FKRDtDQUVBOzs7Ozs7QUNGQTtJQWFFO1FBRlUsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FFakM7Ozs7SUFFakIsMkNBQVE7OztJQUFSO0tBQ0M7Ozs7O0lBQ0QsOENBQVc7Ozs7SUFBWCxVQUFZLElBQVk7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUI7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsbzZHQUErQzs7aUJBSWhEOzs7Ozs2QkFFRSxNQUFNO3VCQUNOLEtBQUs7O0lBU1IsK0JBQUM7Q0FsQkQ7Ozs7OztBQ0hBO0lBSUE7S0FPc0M7O2dCQVByQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3hDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUNwQzs7SUFDb0MsNEJBQUM7Q0FQdEM7Ozs7Ozs7Ozs7Ozs7OyJ9