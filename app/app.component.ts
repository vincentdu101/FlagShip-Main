import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from "angular2/router";
import {HomeComponent} from "./home/home.component";
import {ResourcesComponent} from "./resources/resources.component";
import {ProjectsComponent} from "./project/projects.component";
import {NewProjectComponent} from "./project/new.project.component";
import {CategoryService} from "./services/category/category.service";
import {ProjectService} from "./services/project/project.service";
import {Http} from "angular2/http";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES, RouterOutlet],
    providers: [ProjectService, CategoryService]
})

@RouteConfig([
	{ path: "/", name: "Home", component: HomeComponent, useAsDefault: true },
	{ path: "/resources", name: "Resources", component: ResourcesComponent},
	{ path: "/projects", name: "Projects", component: ProjectsComponent },
	{ path: "/projects/new", name: "New Project", component: NewProjectComponent }
])

export class AppComponent {

	constructor(private projectService: ProjectService,
				private categoryService: CategoryService) {
		
		this.categoryService.getAllCategories();
	
	}

}