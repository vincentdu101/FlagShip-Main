import {Component} from "angular2/core";
import {HeaderComponent} from "../header/header.component";
import {FORM_DIRECTIVES} from "angular2/common";
import {ProjectService} from "../services/project/project.service";

@Component({
	templateUrl: "./app/project/new.project.component.html",
	directives: [HeaderComponent, FORM_DIRECTIVES]
})

export class NewProjectComponent {

	public project = { name: "", description: "" };

	constructor(private projectService: ProjectService) {

	}

	public createProject(): void {
		this.projectService.createProject(this.project);
	}
	
}