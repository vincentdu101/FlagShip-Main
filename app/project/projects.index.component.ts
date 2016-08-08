import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {ProjectService} from "../services/project/project.service";
import {Config} from "../services/configuration/config";
import {Router} from "@angular/router";

@Component({
	selector: "projects-index",
	templateUrl: "./app/project/projects.index.component.html",
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class ProjectsIndexComponent {

	public projects: Array<any> = [];

	constructor(private projectService: ProjectService,
				private config: Config,
				private router: Router) {
		this.projectService.getAllProjects().subscribe((data) => {
			this.projects = data.json();
			console.log(this.projects);
		});
	}

	public outputImagePath(image:string): string {
		return this.config.imagePath + "/" + image;
	}

	public editProject(project): void {
		this.router.navigate(["/projects/edit/" + project._id, {}]);
	}

}