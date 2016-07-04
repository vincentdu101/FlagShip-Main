System.register(["angular2/core", "angular2/router", "angular2/common", "../services/configuration/session.service", "../services/project/project.service", "../services/category/category.service", "../header/header.component"], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, session_service_1, project_service_1, category_service_1, header_component_1;
    var ResourcesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            ResourcesComponent = (function () {
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
                        _this.projects = JSON.parse(data._body);
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
            exports_1("ResourcesComponent", ResourcesComponent);
        }
    }
});
//# sourceMappingURL=resources.component.js.map