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
var common_1 = require("@angular/common");
var project_service_1 = require("../services/project/project.service");
var config_1 = require("../services/configuration/config");
var router_1 = require("@angular/router");
var ProjectsIndexComponent = (function () {
    function ProjectsIndexComponent(projectService, config, router) {
        this.projectService = projectService;
        this.config = config;
        this.router = router;
        this.projects = [];
        this.getProjects();
    }
    ProjectsIndexComponent.prototype.getProjects = function (options) {
        var _this = this;
        if (options === void 0) { options = { name: undefined }; }
        this.projectService.getAllProjects(options).subscribe(function (data) {
            _this.projects = data.json();
        });
    };
    ProjectsIndexComponent.prototype.outputImagePath = function (image) {
        return this.config.imagePath + "/" + image;
    };
    ProjectsIndexComponent.prototype.editProject = function (project) {
        this.router.navigate(["/projects/edit/" + project._id, {}]);
    };
    ProjectsIndexComponent.prototype.viewProject = function (project) {
        this.router.navigate(["/projects/view/" + project._id, {}]);
    };
    ProjectsIndexComponent.prototype.searchForName = function (event) {
        this.getProjects({ name: event.target.value });
    };
    ProjectsIndexComponent = __decorate([
        core_1.Component({
            selector: "projects-index",
            templateUrl: "./app/project/projects.index.component.html",
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, config_1.Config, router_1.Router])
    ], ProjectsIndexComponent);
    return ProjectsIndexComponent;
}());
exports.ProjectsIndexComponent = ProjectsIndexComponent;
//# sourceMappingURL=projects.index.component.js.map