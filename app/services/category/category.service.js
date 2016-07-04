System.register(["angular2/core", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var CategoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            CategoryService = (function () {
                function CategoryService(http) {
                    this.http = http;
                    this.categories = [];
                    this.TYPE = {
                        "Projects": "primary",
                        "Skill": "warning"
                    };
                }
                CategoryService.prototype.determineArticleCategory = function (category_id) {
                    var category = this.findCategory(category_id);
                    return "<span class='label label-" + this.TYPE[category.name] + "'>" +
                        category.name + "</span>";
                };
                CategoryService.prototype.getAllCategories = function () {
                    var _this = this;
                    return this.http.get("http://localhost:8080/categories")
                        .map(function (data) { return JSON.parse(data._body); })
                        .subscribe(function (data) {
                        _this.categories = data;
                    });
                };
                CategoryService.prototype.findCategory = function (id) {
                    return this.categories.filter(function (data) {
                        if (data._id === id) {
                            return data;
                        }
                    })[0];
                };
                CategoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CategoryService);
                return CategoryService;
            }());
            exports_1("CategoryService", CategoryService);
        }
    }
});
//# sourceMappingURL=category.service.js.map