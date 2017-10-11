/**
 * Created by F1 on 2017/5/31.
 */
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
var app_config_1 = require("../../app-config");
var MySettingsComponent = (function () {
    function MySettingsComponent(config) {
        this.config = config;
        this.app = config.appConfig;
    }
    return MySettingsComponent;
}());
MySettingsComponent = __decorate([
    core_1.Component({
        selector: 'my-settings',
        templateUrl: './settings.html'
    }),
    __metadata("design:paramtypes", [app_config_1.Config])
], MySettingsComponent);
exports.MySettingsComponent = MySettingsComponent;
//# sourceMappingURL=my-settings.component.js.map
