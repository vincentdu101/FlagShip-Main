import {Component, OnInit} from "@angular/core";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl} from "@angular/forms";
import {OtherService} from "../services/configuration/other.service";

@Component({
	templateUrl: "./edit.project.component.html",
	selector: "edit-project"
})
export class EditProjectComponent implements OnInit {

	public projectData;
	public content;
	public categories = [];
	public project: FormGroup;

	constructor(private projectService: ProjectService,
				private categoryService: CategoryService,
				private activatedRoute: ActivatedRoute,
				private otherService: OtherService) {
		this.content = '<p>Hello <strong>World !</strong></p>';
		this.categories = this.categoryService.getCategories();
	}

	ngOnInit() {
		const id = this.activatedRoute.snapshot.paramMap.get("id");
		this.initEditForm();
		this.projectService.getProject(id).subscribe(data => {
			this.projectData = data;
			this.projectData.category = this.categoryService.findCategoryById(this.projectData.category_id).name;
			this.setupEditForm(this.projectData);
		});
	}

	private initEditForm(): void {
		this.project = new FormGroup({
			name: new FormControl(),
			body: new FormControl(),
			description: new FormControl(),
			category: new FormControl(),
			image: new FormControl()
		});
	}

	private setupEditForm(projectData): void {
		this.project = new FormGroup({
			name: new FormControl({value: projectData.name}),
			body: new FormControl({value: projectData.body}),
			description: new FormControl({ value: projectData.description }),
			category: new FormControl({value: projectData.category}),
			image: new FormControl({ value: projectData.image })
		});
	}

	public saveProject(): void {
		this.projectService.saveProject(this.project);
	}

	public toggleDropdown(category): void {
		this.projectData.category = category.name;
	}
	
	public checkActiveCategory(category): any {
		return { "active": category.name === this.projectData.name };
	}

}