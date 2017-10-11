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
var user_service_1 = require("./user.service");
var user_1 = require("./user");
var UserAddComponent = (function () {
    function UserAddComponent(userService) {
        this.userService = userService;
        this.user = new user_1.User();
    }
    UserAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.add(this.user)
            .subscribe(function (data) {
            if (data.code == '1001') {
                alert("success");
            }
            else {
                alert("fail");
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    UserAddComponent.prototype.getJson = function () {
        return JSON.stringify(this.user);
    };
    return UserAddComponent;
}());
UserAddComponent = __decorate([
    core_1.Component({
        templateUrl: './user-add.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserAddComponent);
exports.UserAddComponent = UserAddComponent;
//# sourceMappingURL=user-add.component.js.map
