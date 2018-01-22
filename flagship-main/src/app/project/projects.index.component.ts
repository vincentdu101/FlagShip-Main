import {Component} from "@angular/core";
import {ProjectService} from "../services/project/project.service";
import {Config} from "../services/configuration/config";
import {Router} from "@angular/router";

@Component({
	selector: "projects-index",
	templateUrl: "./projects.index.component.html",
	styleUrls: ["./projects.index.component.scss"]
})

export class ProjectsIndexComponent {

	public projects: Array<any> = [];

	constructor(private projectService: ProjectService,
				private config: Config,
				private router: Router) {
		this.getProjects();
	}

	private getProjects(options = { name: undefined }) {
		this.projectService.getAllProjects(options).subscribe((data) => {
			// this.projects = data.json();
		});
	}

	public outputImagePath(image:string): string {
		return this.config.imagePath + "/" + image;
	}

	public editProject(project): void {
		this.router.navigate(["/projects/edit/" + project._id, {}]);
	}

	public viewProject(project): void {
		this.router.navigate(["/projects/view/" + project._id, {}]);
	}

	public searchForName(event) {
		this.getProjects({ name: event.target.value });
	}

}