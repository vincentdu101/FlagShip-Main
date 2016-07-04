System.register(['angular2/core', "angular2/router", "./home/home.component", "./resources/resources.component", "./project/projects.component", "./project/new.project.component", "./services/category/category.service", "./services/project/project.service"], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, resources_component_1, projects_component_1, new_project_component_1, category_service_1, project_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (resources_component_1_1) {
                resources_component_1 = resources_component_1_1;
            },
            function (projects_component_1_1) {
                projects_component_1 = projects_component_1_1;
            },
            function (new_project_component_1_1) {
                new_project_component_1 = new_project_component_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(projectService, categoryService) {
                    this.projectService = projectService;
                    this.categoryService = categoryService;
                    this.categoryService.getAllCategories();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet],
                        providers: [project_service_1.ProjectService, category_service_1.CategoryService]
                    }),
                    router_1.RouteConfig([
                        { path: "/", name: "Home", component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: "/resources", name: "Resources", component: resources_component_1.ResourcesComponent },
                        { path: "/projects", name: "Projects", component: projects_component_1.ProjectsComponent },
                        { path: "/projects/new", name: "New Project", component: new_project_component_1.NewProjectComponent }
                    ]), 
                    __metadata('design:paramtypes', [project_service_1.ProjectService, category_service_1.CategoryService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map