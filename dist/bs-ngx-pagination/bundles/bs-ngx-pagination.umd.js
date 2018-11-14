(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('bs-ngx-pagination', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['bs-ngx-pagination'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var BsNgxPaginationComponent = /** @class */ (function () {
        function BsNgxPaginationComponent() {
            this.pageChange = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'bs-ngx-pagination',
                        template: "<ul class=\"pagination justify-content-center\">\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>1\">\r\n    <a class=\"page-link\" [href]=\"data.prev_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page-1);$event.preventDefault();\">\r\n      <span aria-hidden=\"true\">&laquo;</span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>1\" (click)=\"pageChanged(1);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>2\" (click)=\"pageChanged(2);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page==7\" (click)=\"pageChanged(3);$event.preventDefault();\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\r\n  <li class=\"page-item disabled\" *ngIf=\"data.current_page>7\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>5\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-3 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-2 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page>3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page-3);$event.preventDefault();\">{{ data.current_page-1 }}</a></li>\r\n\r\n  <li class=\"page-item active\"><a class=\"page-link\" href=\"#\" (click)=\"$event.preventDefault()\">{{ data.current_page }}</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-2\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">{{ data.current_page+1 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-3\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+2);$event.preventDefault();\">{{ data.current_page+2 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-4\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.current_page+3);$event.preventDefault();\">{{ data.current_page+3 }}</a></li>\r\n\r\n  <li class=\"page-item disabled\" *ngIf=\"data.current_page<data.last_page-6\"><a class=\"page-link\" href=\"#\">...</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page==data.last_page-6\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-2);$event.preventDefault();\">{{ data.last_page-2 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page-1\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page-1);$event.preventDefault();\">{{ data.last_page-1 }}</a></li>\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\"><a class=\"page-link\" href=\"#\" (click)=\"pageChanged(data.last_page);$event.preventDefault();\">{{ data.last_page }}</a></li>\r\n\r\n  <li class=\"page-item\" *ngIf=\"data.current_page<data.last_page\">\r\n    <a class=\"page-link\" [href]=\"data.next_page_url\" aria-label=\"Previous\" (click)=\"pageChanged(data.current_page+1);$event.preventDefault();\">\r\n      <span aria-hidden=\"true\">&raquo;</span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        BsNgxPaginationComponent.ctorParameters = function () { return []; };
        BsNgxPaginationComponent.propDecorators = {
            pageChange: [{ type: i0.Output }],
            data: [{ type: i0.Input }]
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.BsNgxPaginationService = BsNgxPaginationService;
    exports.BsNgxPaginationComponent = BsNgxPaginationComponent;
    exports.BsNgxPaginationModule = BsNgxPaginationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbmd4LXBhZ2luYXRpb24udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9icy1uZ3gtcGFnaW5hdGlvbi9saWIvYnMtbmd4LXBhZ2luYXRpb24uc2VydmljZS50cyIsIm5nOi8vYnMtbmd4LXBhZ2luYXRpb24vbGliL2JzLW5neC1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vYnMtbmd4LXBhZ2luYXRpb24vbGliL2JzLW5neC1wYWdpbmF0aW9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJzTmd4UGFnaW5hdGlvblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9icy1uZ3gtcGFnaW5hdGlvbi5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1uZ3gtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnYnMtbmd4LXBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQnNOZ3hQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQElucHV0KCkgZGF0YTogUGFnaW5hdGlvbjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBwYWdlQ2hhbmdlZChwYWdlOiBudW1iZXIpIHtcbiAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChwYWdlKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNOZ3hQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9icy1uZ3gtcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0JzTmd4UGFnaW5hdGlvbkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0JzTmd4UGFnaW5hdGlvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQnNOZ3hQYWdpbmF0aW9uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJPdXRwdXQiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztxQ0FKRDtLQUVBOzs7Ozs7QUNGQTtRQWFFO1lBRlUsZUFBVSxHQUFHLElBQUlDLGVBQVksRUFBVSxDQUFDO1NBRWpDOzs7O1FBRWpCLDJDQUFROzs7WUFBUjthQUNDOzs7OztRQUNELDhDQUFXOzs7O1lBQVgsVUFBWSxJQUFZO2dCQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1Qjs7b0JBaEJGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsbzZHQUErQzs7cUJBSWhEOzs7OztpQ0FFRUMsU0FBTTsyQkFDTkMsUUFBSzs7UUFTUiwrQkFBQztLQWxCRDs7Ozs7O0FDSEE7UUFJQTtTQU9zQzs7b0JBUHJDQyxXQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7d0JBQ3hDLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7eUJBQ2I7d0JBQ0QsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7cUJBQ3BDOztRQUNvQyw0QkFBQztLQVB0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9