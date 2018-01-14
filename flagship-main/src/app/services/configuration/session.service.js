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
require('rxjs/add/operator/share');
require('rxjs/add/operator/startWith');
var Session = (function () {
    function Session(http) {
        var _this = this;
        this.http = http;
        this.sessionObservable = new Observable_1.Observable(function (observer) {
            _this.sessionObserver = observer;
        }).share();
    }
    Session.prototype.asyncRequestParse = function (data) {
        var str = [];
        for (var key in data) {
            if (data[key] instanceof Array) {
                for (var idx in data[key]) {
                    var subObj = data[key][idx];
                    for (var subKey in subObj) {
                        str.push(encodeURIComponent(key) + "[" + idx + "][" + encodeURIComponent(subKey) + "]=" + encodeURIComponent(subObj[subKey]));
                    }
                }
            }
            else {
                str.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
            }
        }
        return str.join("&");
    };
    Session.prototype.loginUser = function (formData) {
        var _this = this;
        if (formData.username && formData.password) {
            this.http.post("http://localhost:8080/login", this.asyncRequestParse(formData))
                .subscribe(function (data) {
                debugger;
                // this.currentUser = JSON.parse(data._body);
                _this.sessionObserver.next({ success: _this.currentUser });
            });
        }
        else {
            this.sessionObserver.next({ error: "missing username or password" });
        }
    };
    Session = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Session);
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=session.service.js.map