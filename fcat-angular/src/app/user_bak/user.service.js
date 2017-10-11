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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var app_config_1 = require("../app-config");
/**
 * Created by F1 on 2017/6/1.
 */
var UserService = (function () {
    function UserService(config, http) {
        this.config = config;
        this.http = http;
        this.baseUrl = "infoUser/";
        var app = config.appConfig;
        this.baseUrl = app.baseUrl + this.baseUrl;
    }
    UserService.prototype.getUserList = function (currentPage, pageSize) {
        var url = this.baseUrl + "getList?pageNo=" + currentPage + "&pageSize=" + pageSize;
        return this.get(url);
    };
    UserService.prototype.delete = function (userId) {
        var url = this.baseUrl + "delete/" + userId;
        return this.post(url);
    };
    UserService.prototype.add = function (user) {
        var url = this.baseUrl + "addUser";
        return this.post(url, user);
    };
    UserService.prototype.getUserCount = function () {
        var url = this.baseUrl + "count";
        return this.get(url);
    };
    UserService.prototype.post = function (url, param) {
        url = this.getSessionIdUrl(url);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, param, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.get = function (url) {
        url = this.getSessionIdUrl(url);
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
        // return Promise.resolve(body.data);
    };
    UserService.prototype.getSessionIdUrl = function (url) {
        if (url.indexOf("?") > -1) {
            url = url + "&sessionId=sessionId";
        }
        else {
            url = url + "?sessionId=sessionId";
        }
        return url;
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_config_1.Config, http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
