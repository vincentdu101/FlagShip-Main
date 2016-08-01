import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {ProjectService} from "../services/project/project.service";

@Component({
	selector: "projects-index",
	templateUrl: "./app/project/projects.index.component.html",
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class ProjectsIndexComponent {

	public projects: Array<any> = [];

	constructor(private projectService: ProjectService) {
		this.projectService.getAllProjects().subscribe((data) => {
			this.projects = data.json();
			console.log(this.projects);
		});
	}

}