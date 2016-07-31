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
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var category_service_1 = require("./services/category/category.service");
var project_service_1 = require("./services/project/project.service");
var carousel_service_1 = require("./services/carousel/carousel.service");
var skills_service_1 = require("./services/skills/skills.service");
var portfolio_service_1 = require("./services/portfolio/portfolio.service");
var AppComponent = (function () {
    function AppComponent(projectService, categoryService) {
        this.projectService = projectService;
        this.categoryService = categoryService;
        this.categoryService.getAllCategories();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet, header_component_1.HeaderComponent, footer_component_1.FooterComponent],
            providers: [
                project_service_1.ProjectService,
                category_service_1.CategoryService,
                carousel_service_1.CarouselService,
                skills_service_1.SkillsService,
                portfolio_service_1.PortfolioService
            ]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, category_service_1.CategoryService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map