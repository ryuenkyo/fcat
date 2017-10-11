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
var core_1 = require("@angular/core");
//import {fullscreenElement} from "/libs/screenfull.min.js";
var MyFullscreenComponent = (function () {
    function MyFullscreenComponent() {
    }
    return MyFullscreenComponent;
}());
MyFullscreenComponent = __decorate([
    core_1.Component({
        selector: 'my-fullscreen',
        template: '<i class="active fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
    })
], MyFullscreenComponent);
exports.MyFullscreenComponent = MyFullscreenComponent;
//# sourceMappingURL=my-fullscreen.component.js.map
