System.register(["angular2/core", "angular2/http", "rxjs/Observable", 'rxjs/add/operator/share', 'rxjs/add/operator/startWith'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var ProjectService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            ProjectService = (function () {
                function ProjectService(http) {
                    var _this = this;
                    this.http = http;
                    this.projectObservable = new Observable_1.Observable(function (observer) {
                        _this.projectObserver = observer;
                    }).share();
                }
                ProjectService.prototype.asyncRequestParse = function (data) {
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
                ProjectService.prototype.getAllProjects = function () {
                    return this.http.get("http://localhost:8080/articles?category_id=56d2368fbefe83262d3e14e4");
                };
                ProjectService.prototype.createProject = function (project) {
                    project.category_id = "56d2368fbefe83262d3e14e4";
                    this.http.post("http://localhost:8080/articles", this.asyncRequestParse(project), { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
                        .subscribe(function (data) {
                        debugger;
                    });
                };
                ProjectService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProjectService);
                return ProjectService;
            }());
            exports_1("ProjectService", ProjectService);
        }
    }
});
//# sourceMappingURL=project.service.js.map