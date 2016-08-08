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
var router_1 = require("@angular/router");
var EditProjectComponent = (function () {
    function EditProjectComponent(projectService, categoryService, router, route) {
        this.projectService = projectService;
        this.categoryService = categoryService;
        this.router = router;
        this.route = route;
        this.project = { name: "", description: "", image: "", body: "", category: "Projects" };
        this.categories = [];
        this.content = '<p>Hello <strong>World !</strong></p>';
        this.categories = this.categoryService.getCategories();
    }
    EditProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectService.getProject(params.id).subscribe(function (data) {
                _this.project = data.json();
                _this.project.category = _this.categoryService.findCategoryById(_this.project.category_id).name;
            });
        });
    };
    EditProjectComponent.prototype.createProject = function () {
        this.projectService.createProject(this.project);
    };
    EditProjectComponent.prototype.toggleDropdown = function (category) {
        this.project.category = category.name;
    };
    EditProjectComponent.prototype.checkActiveCategory = function (category) {
        return { "active": category.name === this.project.name };
    };
    EditProjectComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/project/edit.project.component.html",
            selector: "edit-project",
            directives: [common_1.FORM_DIRECTIVES, dropdown_1.DROPDOWN_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, category_service_1.CategoryService, router_1.Router, router_1.ActivatedRoute])
    ], EditProjectComponent);
    return EditProjectComponent;
}());
exports.EditProjectComponent = EditProjectComponent;
//# sourceMappingURL=edit.project.component.js.map