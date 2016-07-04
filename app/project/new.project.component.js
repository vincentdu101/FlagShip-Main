System.register(["angular2/core", "../header/header.component", "angular2/common", "../services/project/project.service"], function(exports_1, context_1) {
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
    var core_1, header_component_1, common_1, project_service_1;
    var NewProjectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            }],
        execute: function() {
            NewProjectComponent = (function () {
                function NewProjectComponent(projectService) {
                    this.projectService = projectService;
                    this.project = { name: "", description: "" };
                }
                NewProjectComponent.prototype.createProject = function () {
                    this.projectService.createProject(this.project);
                };
                NewProjectComponent = __decorate([
                    core_1.Component({
                        templateUrl: "./app/project/new.project.component.html",
                        directives: [header_component_1.HeaderComponent, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [project_service_1.ProjectService])
                ], NewProjectComponent);
                return NewProjectComponent;
            }());
            exports_1("NewProjectComponent", NewProjectComponent);
        }
    }
});
//# sourceMappingURL=new.project.component.js.map