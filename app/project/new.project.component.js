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
var category_service_1 = require("../services/category/category.service");
var dropdown_1 = require("ng2-bootstrap/components/dropdown");
var NewProjectComponent = (function () {
    function NewProjectComponent(projectService, categoryService) {
        this.projectService = projectService;
        this.categoryService = categoryService;
        this.project = { name: "", description: "", image: "", body: "", category: "Projects" };
        this.categories = [];
        this.content = '<p>Hello <strong>World !</strong></p>';
        this.categories = this.categoryService.getCategories();
    }
    NewProjectComponent.prototype.createProject = function () {
        this.projectService.createProject(this.project);
    };
    NewProjectComponent.prototype.toggleDropdown = function (category) {
        this.project.category = category.name;
    };
    NewProjectComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/project/new.project.component.html",
            selector: "new-project",
            directives: [common_1.FORM_DIRECTIVES, dropdown_1.DROPDOWN_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, category_service_1.CategoryService])
    ], NewProjectComponent);
    return NewProjectComponent;
}());
exports.NewProjectComponent = NewProjectComponent;
//# sourceMappingURL=new.project.component.js.map