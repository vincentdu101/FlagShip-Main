import {Component} from "@angular/core";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";
import {ICategory} from "../services/configuration/config";

@Component({
	templateUrl: "./new.project.component.html",
	selector: "new-project"
})

export class NewProjectComponent {

	public project = { name: "", description: "", image: "", body: "", category: "Projects" };
	public content;
	public categories: ICategory[] = [];

	constructor(private projectService: ProjectService,
				private categoryService: CategoryService) {
		this.content = '<p>Hello <strong>World !</strong></p>'; 
		this.categoryService.getCategories().subscribe((data: ICategory[]) => {
			this.categories = data;
		});
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