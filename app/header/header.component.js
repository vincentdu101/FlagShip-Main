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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var session_service_1 = require("../services/configuration/session.service");
var dropdown_1 = require("ng2-bootstrap/components/dropdown");
var HeaderComponent = (function () {
    function HeaderComponent(router, http, Session) {
        this.router = router;
        this.http = http;
        this.Session = Session;
        this.login = { username: "", password: "" };
        this.user = {};
        this.mobileToggle = false;
        this.bars = [
            { name: "Home", url: "/", active: false },
            { name: "About", url: "/about", active: false },
            { name: "Portfolio", url: "/projects", dropdown: [], active: false }
        ];
        this.hideDropdownClick();
    }
    HeaderComponent.prototype.hideDropdownClick = function () {
        var _this = this;
        $("html").click(function () {
            for (var i = 0; i < _this.bars.length; i++) {
                _this.bars[i].active = false;
            }
        });
    };
    HeaderComponent.prototype.goToPage = function (page, config) {
        if (config === void 0) { config = {}; }
        this.router.navigate([page, config]);
    };
    HeaderComponent.prototype.loginUser = function () {
        var _this = this;
        var formData = { username: this.login.username, password: this.login.password };
        this.Session.loginUser(formData);
        var sessionObservable = this.Session.sessionObservable.subscribe(function (data) {
            if (data.success) {
                _this.user = data.success;
                sessionObservable.unsubscribe();
            }
        });
    };
    HeaderComponent.prototype.triggerSlideToggle = function () {
        $("nav ul").slideToggle();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: "header",
            templateUrl: "./app/header/header.component.html",
            providers: [http_1.HTTP_PROVIDERS, session_service_1.Session],
            directives: [common_1.FORM_DIRECTIVES, common_1.NgIf, dropdown_1.DROPDOWN_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, session_service_1.Session])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map