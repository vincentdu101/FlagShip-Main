import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FORM_DIRECTIVES, NgIf} from "@angular/common";
import {Http, HTTP_PROVIDERS} from "@angular/http";
import {Session} from "../services/configuration/session.service";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";
import {HeaderComponent} from "../header/header.component";

@Component({
	templateUrl: "./app/resources/resources.component.html",
	directives: [FORM_DIRECTIVES, NgIf, HeaderComponent],
	providers: [Session]
})

export class ResourcesComponent {

	public projects;

	constructor(private Session: Session, private router: Router,
				private projectService: ProjectService,
				public CategoryService: CategoryService) {
		this.Session.sessionObservable.subscribe((data) => {
			if (data.logout) {
				this.router.navigate(["Home"]);
			}
		});
		this.projectService.getAllProjects().subscribe((data) => {
			debugger;
			// this.projects = JSON.parse(data._body);
		});
	}



	

}