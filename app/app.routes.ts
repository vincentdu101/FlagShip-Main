import { provideRouter, RouterConfig} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ResourcesComponent} from "./resources/resources.component";
import {ProjectsIndexComponent} from "./project/projects.index.component";
import {NewProjectComponent} from "./project/new.project.component";
import {EditProjectComponent} from "./project/edit.project.component";
import {ViewProjectComponent} from "./project/view.project.component";

const routes: RouterConfig = [
	{ path: "", component: HomeComponent },
	{ path: "resources", component: ResourcesComponent },
	{ path: "projects", component: ProjectsIndexComponent },
	{ path: "projects/new", component: NewProjectComponent },
	{ path: "projects/edit/:id", component: EditProjectComponent}
	{ path: "projects/view/:id", component: ViewProjectComponent }
]

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];