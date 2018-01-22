import {Component} from "@angular/core";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
	templateUrl: "./edit.project.component.html",
	selector: "edit-project"
})
export class EditProjectComponent {

	public project = { 
		name: "", 
		description: "", 
		image: "", 
		body: "", 
		category: "Projects", 
		category_id: ""
	};
	public content;
	public categories = [];

	constructor(private projectService: ProjectService,
				private categoryService: CategoryService,
				private router: Router,
				private route: ActivatedRoute) {
		this.content = '<p>Hello <strong>World !</strong></p>';
		this.categories = this.categoryService.getCategories();
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.projectService.getProject(params.id).subscribe(data => {
				// this.project = data;
				this.project.category = this.categoryService.findCategoryById(this.project.category_id).name;
			});
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