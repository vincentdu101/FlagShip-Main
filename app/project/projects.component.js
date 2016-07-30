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
var portfolio_service_1 = require("../services/portfolio/portfolio.service");
var ng2_select_1 = require("ng2-select/ng2-select");
var ProjectsComponent = (function () {
    function ProjectsComponent(portfolioService) {
        var _this = this;
        this.portfolioService = portfolioService;
        this.portfolio = [];
        this.portfolioOptions = [];
        this.currentProject = {
            name: "Choose Project",
            description: "to view",
            image: ""
        };
        this.portfolioService.getPortfolio().subscribe(function (data) {
            _this.portfolio = _this.initPortfolioActive(data.json());
            _this.portfolioOptions = _this.portfolioService.parsePortfolio(_this.portfolio);
        });
    }
    ProjectsComponent.prototype.initPortfolioActive = function (data) {
        return data.map(function (item) {
            item.active = false;
            return item;
        });
    };
    ProjectsComponent.prototype.portfolioSelected = function (item) {
        this.currentProject = this.portfolio.filter(function (data) {
            return data.name === item.text;
        })[0];
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: "projects",
            templateUrl: "./app/project/projects.component.html",
            directives: [ng2_select_1.SELECT_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [portfolio_service_1.PortfolioService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map