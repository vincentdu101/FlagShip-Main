System.register(["angular2/core", "angular2/router", "angular2/common", "angular2/http", "../services/configuration/session.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, http_1, session_service_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(router, http, Session) {
                    this.router = router;
                    this.http = http;
                    this.Session = Session;
                    this.login = { username: "", password: "" };
                    this.user = undefined;
                }
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
                            $(".login-modal").modal({ show: false });
                        }
                    });
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: "header",
                        templateUrl: "./app/header/header.component.html",
                        providers: [http_1.HTTP_PROVIDERS, session_service_1.Session],
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http, session_service_1.Session])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map