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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/operator/share');
require('rxjs/add/operator/startWith');
var category_service_1 = require("../category/category.service");
var ProjectService = (function () {
    function ProjectService(http, categoryService, router) {
        var _this = this;
        this.http = http;
        this.categoryService = categoryService;
        this.router = router;
        this.projectObservable = new Observable_1.Observable(function (observer) {
            _this.projectObserver = observer;
        });
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
    ProjectService.prototype.generatePostUrlParams = function (project) {
        project.category_id = this.categoryService.findCategoryByName(project.category)._id;
        var urlParams = { body: "", headers: undefined, options: undefined };
        urlParams.body = JSON.stringify(project);
        urlParams.headers = new http_1.Headers({ "Content-Type": "application/json" });
        urlParams.options = new http_1.RequestOptions({ headers: urlParams.headers });
        return urlParams;
    };
    ProjectService.prototype.getAllProjects = function (options) {
        if (options === void 0) { options = { name: undefined }; }
        var category_id = "56d2368fbefe83262d3e14e4";
        return this.http.get("http://localhost:8080/articles?category_id=" + category_id + "&name=" + options.name);
    };
    ProjectService.prototype.createProject = function (project) {
        var _this = this;
        var params = this.generatePostUrlParams(project);
        this.http.post("http://localhost:8080/articles", params.body, params.options)
            .subscribe(function (data) {
            _this.router.navigate(["/projects"]);
        });
    };
    ProjectService.prototype.saveProject = function (project) {
        var _this = this;
        var params = this.generatePostUrlParams(project);
        this.http.put("http://localhost:8080/articles/" + project._id, params.body, params.options)
            .subscribe(function (data) {
            _this.router.navigate(["/projects"]);
        });
    };
    ProjectService.prototype.getProject = function (id) {
        return this.http.get("http://localhost:8080/articles/" + id);
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, category_service_1.CategoryService, router_1.Router])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map