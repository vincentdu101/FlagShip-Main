System.register(['angular2/platform/browser', "angular2/router", './app.component', "angular2/http", "angular2/core", 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, router_1, app_component_1, http_1, core_1;
    var CORSBrowserXHR;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            CORSBrowserXHR = (function (_super) {
                __extends(CORSBrowserXHR, _super);
                function CORSBrowserXHR() {
                    _super.apply(this, arguments);
                }
                CORSBrowserXHR.prototype.build = function () {
                    var xhr = _super.prototype.build.call(this);
                    xhr.withCredentials = true;
                    return xhr;
                };
                CORSBrowserXHR = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CORSBrowserXHR);
                return CORSBrowserXHR;
            }(http_1.BrowserXhr));
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, core_1.provide(http_1.BrowserXhr, { useClass: CORSBrowserXHR }),
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map