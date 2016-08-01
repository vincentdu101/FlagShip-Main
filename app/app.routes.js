"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var resources_component_1 = require("./resources/resources.component");
var projects_index_component_1 = require("./project/projects.index.component");
var new_project_component_1 = require("./project/new.project.component");
var routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "resources", component: resources_component_1.ResourcesComponent },
    { path: "projects", component: projects_index_component_1.ProjectsIndexComponent },
    { path: "projects/new", component: new_project_component_1.NewProjectComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map