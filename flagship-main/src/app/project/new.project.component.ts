import {Component} from "@angular/core";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";


@Component({
	templateUrl: "./new.project.component.html",
	selector: "new-project"
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
	
	public checkActiveCategory(category): any {
		return { "active": category.name === this.project.name };
	}

}