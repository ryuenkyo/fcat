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
/**
 * Created by F1 on 2017/6/1.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var UserListComponent = (function () {
    function UserListComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.pageSize = 8;
        this.currentPage = 1;
        this.firstText = '首页';
    }
    UserListComponent.prototype.pageChanged = function (page) {
        this.currentPage = page.page;
        this.pageSize = page.itemsPerPage;
        this.getUserList();
    };
    UserListComponent.prototype.numPages = function (numPages) {
        console.log(numPages);
    };
    UserListComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    UserListComponent.prototype.getUserList = function () {
        var _this = this;
        this.userService.getUserList(this.currentPage, this.pageSize).subscribe(function (data) {
            _this.userList = data.data;
        });
        this.userService.getUserCount().subscribe(function (data) {
            _this.totalItems = data.data;
            if (_this.totalItems <= _this.pageSize) {
                _this.disabled = true;
            }
        });
    };
    UserListComponent.prototype.ngOnInit = function () {
        this.getUserList();
    };
    UserListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedUser.id]);
    };
    UserListComponent.prototype.delete = function (userId) {
        var _this = this;
        this.userService.delete(userId).subscribe(function (data) {
            if (data.code == '1001') {
                alert("success");
                _this.getUserList();
            }
            else {
                alert("fail");
            }
        });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        // selector: 'my-heroes',
        templateUrl: './user-list.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map
