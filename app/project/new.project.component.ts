import {Component} from "@angular/core";
import {FORM_DIRECTIVES} from "@angular/common";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";
import {DROPDOWN_DIRECTIVES} from "ng2-bootstrap/components/dropdown";


@Component({
	templateUrl: "./app/project/new.project.component.html",
	selector: "new-project",
	directives: [FORM_DIRECTIVES, DROPDOWN_DIRECTIVES]
})

export class NewProjectComponent {

	public project = { name: "", description: "", image: "", body: "", category: "Projects" };
	public content;
	public categories = [];

	constructor(private projectService: ProjectService,
				private categoryService: CategoryService) {
		this.content = '<p>Hello <strong>World !</strong></p>'; 
		this.categories = this.categoryService.getCategories();
	}

	public createProject(): void {
		this.projectService.createProject(this.project);
	}

	public toggleDropdown(category): void {
		this.project.category = category.name;
	}
	
}