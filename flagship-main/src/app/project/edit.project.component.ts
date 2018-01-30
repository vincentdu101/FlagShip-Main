import {Component, OnInit} from "@angular/core";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";
import {ActivatedRoute} from "@angular/router";


@Component({
	templateUrl: "./edit.project.component.html",
	selector: "edit-project"
})
export class EditProjectComponent implements OnInit {

	public project;
	public content;
	public categories = [];

	constructor(private projectService: ProjectService,
				private categoryService: CategoryService,
				private activatedRoute: ActivatedRoute) {
		this.content = '<p>Hello <strong>World !</strong></p>';
		this.categories = this.categoryService.getCategories();
	}

	ngOnInit() {
		const id = this.activatedRoute.snapshot.paramMap.get("id");
		
		this.projectService.getProject(id).subscribe(data => {
			this.project = data;
			this.project.category = this.categoryService.findCategoryById(this.project.category_id).name;
		});
	}

	public saveProject(): void {
		this.projectService.saveProject(this.project);
	}

	public toggleDropdown(category): void {
		this.project.category = category.name;
	}
	
	public checkActiveCategory(category): any {
		return { "active": category.name === this.project.name };
	}

}