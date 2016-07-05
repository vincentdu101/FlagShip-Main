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
var session_service_1 = require("../services/configuration/session.service");
var project_service_1 = require("../services/project/project.service");
var category_service_1 = require("../services/category/category.service");
var header_component_1 = require("../header/header.component");
var ResourcesComponent = (function () {
    function ResourcesComponent(Session, router, projectService, CategoryService) {
        var _this = this;
        this.Session = Session;
        this.router = router;
        this.projectService = projectService;
        this.CategoryService = CategoryService;
        this.Session.sessionObservable.subscribe(function (data) {
            if (data.logout) {
                _this.router.navigate(["Home"]);
            }
        });
        this.projectService.getAllProjects().subscribe(function (data) {
            debugger;
            // this.projects = JSON.parse(data._body);
        });
    }
    ResourcesComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/resources/resources.component.html",
            directives: [common_1.FORM_DIRECTIVES, common_1.NgIf, header_component_1.HeaderComponent],
            providers: [session_service_1.Session]
        }), 
        __metadata('design:paramtypes', [session_service_1.Session, router_1.Router, project_service_1.ProjectService, category_service_1.CategoryService])
    ], ResourcesComponent);
    return ResourcesComponent;
}());
exports.ResourcesComponent = ResourcesComponent;
//# sourceMappingURL=resources.component.js.map