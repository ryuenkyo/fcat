"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var pagination_config_1 = require("./pagination.config");
var PaginationComponent = (function () {
    function PaginationComponent(paginationConfig) {
        this.perPageOptions = [5, 10, 20, 30, 40, 50];
        this.pageChanged = new core_1.EventEmitter();
        this.numPages = new core_1.EventEmitter();
        this.inited = false;
        this._page = 1;
        this.config = paginationConfig.main;
        this.firstText = this.config.firstText;
        this.previousText = this.config.previousText;
        this.nextText = this.config.nextText;
        this.lastText = this.config.lastText;
        this.maxSize = this.config.maxSize;
        this.itemsPerPage = 10;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = (value > this.totalPages) ? this.totalPages : (value || 1);
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // Create page object used in template
    PaginationComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PaginationComponent.prototype.selectPage = function (currentPage, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(currentPage);
        }
    };
    PaginationComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PaginationComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PaginationComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    // base class
    PaginationComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.prototype.getJSON = function () {
        return "currentPage:" + this.page + "\t" + "pageSize:" + this.itemsPerPage + "\t"
            + "totalItems:" + this.totalItems;
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "maxSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "firstText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "previousText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "nextText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "lastText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PaginationComponent.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PaginationComponent.prototype, "rotate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PaginationComponent.prototype, "pageChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PaginationComponent.prototype, "numPages", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PaginationComponent.prototype, "itemsPerPage", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PaginationComponent.prototype, "totalItems", null);
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'my-pagination',
        template: "   \n   <!--<ul class=\"pagination\">\n     <li *ngIf=\"boundaryLinks\" ng-class=\"{disabled: noPrevious()}\"><a  (click)=\"selectPage(1)\">{{getText('first')}}</a></li>\n     <li *ngIf=\"directionLinks\" ng-class=\"{disabled: noPrevious()}\"><a  (click)=\"selectPage(page - 1)\">{{getText('previous')}}</a></li>\n     <li *ngFor=\"let page of userListPage.pages\" [class]=\"{active: page.active}\"><a  (click)=\"selectPage(page.number)\">{{page.text}}</a></li>\n     <li *ngIf=\"directionLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a></li>\n     <li *ngIf=\"boundaryLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(totalPages)\">{{getText('last')}}</a></li>\n   </ul>-->\n   <ul class=\"pagination\">\n     <li  class=\"pagination-first page-item\"\n            [class.disabled]=\"noPrevious()||disabled\"><a  (click)=\"selectPage(1,$event)\">{{firstText}}</a></li>\n     <li class=\"pagination-prev page-item\" \n            [class.disabled]=\"noPrevious()||disabled\"><a  (click)=\"selectPage(page - 1,$event)\">{{previousText}}</a></li>\n     <li *ngFor=\"let page of pages\" [class.active]=\"page.active\"><a  (click)=\"selectPage(page.number,$event)\">{{page.text}}</a></li>\n     <li  class=\"pagination-next page-item\" \n            [class.disabled]=\"noNext()||disabled\"><a  (click)=\"selectPage(page + 1,$event)\">{{nextText}}</a></li>\n     <li  class=\"pagination-next page-item\" \n            [class.disabled]=\"noNext()||disabled\"><a  (click)=\"selectPage(totalPages,$event)\">{{lastText}}</a></li>\n   </ul>"
    }),
    __metadata("design:paramtypes", [pagination_config_1.PaginationConfig])
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map