import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {SessionService} from "../services/configuration/session.service";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";
import {IArticle} from "../services/configuration/config";

@Component({
	templateUrl: "./resources.component.html"
})

export class ResourcesComponent {

	public projects;

	constructor(private sessionService: SessionService, 
				private router: Router,
				private projectService: ProjectService,
				public CategoryService: CategoryService) {
		this.sessionService.checkLoginStatus();
	}



	

}