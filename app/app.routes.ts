import { provideRouter, RouterConfig} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ResourcesComponent} from "./resources/resources.component";
import {ProjectsComponent} from "./project/projects.component";
import {NewProjectComponent} from "./project/new.project.component";

const routes: RouterConfig = [
	{ path: "home", component: HomeComponent },
	{ path: "resources", component: ResourcesComponent },
	{ path: "projects", component: ProjectsComponent },
	{ path: "projects/new", component: NewProjectComponent }
]

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];