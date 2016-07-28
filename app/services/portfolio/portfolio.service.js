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
var http_1 = require("@angular/http");
var category_service_1 = require("../category/category.service");
var PortfolioService = (function () {
    function PortfolioService(http, categoryService) {
        this.http = http;
        this.categoryService = categoryService;
    }
    PortfolioService.prototype.getPortfolio = function () {
        var slideCategory = this.categoryService.findCategoryByName("Portfolio");
        return this.http.get("http://localhost:8080/articles?category_id=" + slideCategory._id);
    };
    PortfolioService.prototype.parsePortfolio = function (portfolio) {
        return portfolio.map(function (data) {
            return data.name;
        });
    };
    PortfolioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, category_service_1.CategoryService])
    ], PortfolioService);
    return PortfolioService;
}());
exports.PortfolioService = PortfolioService;
//# sourceMappingURL=portfolio.service.js.map