import {Component} from "@angular/core";
import {FORM_DIRECTIVES} from "@angular/common";
import {ProjectService} from "../services/project/project.service";
import {CKEditor} from 'ng2-ckeditor';

@Component({
	templateUrl: "./app/project/new.project.component.html",
	selector: "new-project",
	directives: [FORM_DIRECTIVES, CKEditor]
})

export class NewProjectComponent {

	public project = { name: "", description: "" };
	public content;

	constructor(private projectService: ProjectService) {
		this.content = '<p>Hello <strong>World !</strong></p>'; 
	}

	public createProject(): void {
		this.projectService.createProject(this.project);
	}
	
}