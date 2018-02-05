import {Component, OnInit} from "@angular/core";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl} from "@angular/forms";
import {OtherService} from "../services/configuration/other.service";
import {IArticle, ICategory} from "../services/configuration/config";

@Component({
	templateUrl: "./edit.project.component.html",
	selector: "edit-project"
})
export class EditProjectComponent implements OnInit {

	public projectData: IArticle;
	public content;
	public categories: ICategory[] = [];
	public project: FormGroup;
	public editorBody: string = "";
	public selectedCategory: ICategory;

	constructor(private projectService: ProjectService,
				private categoryService: CategoryService,
				private activatedRoute: ActivatedRoute,
				private otherService: OtherService) {
		this.content = '<p>Hello <strong>World !</strong></p>';
		this.categoryService.getCategories().subscribe((data) => {
			this.categories = data;
			console.log(this.categories);
		});
	}

	ngOnInit() {
		const id = this.activatedRoute.snapshot.paramMap.get("id");
		this.initEditForm();
		this.projectService.getProject(id).subscribe((data: IArticle) => {
			this.projectData = data;
			this.selectedCategory = this.categoryService.findCategoryById(this.projectData.category_id);
			this.setupEditForm(this.projectData);
		});
	}

	private initEditForm(): void {
		this.project = new FormGroup({
			name: new FormControl(),
			description: new FormControl(),
			image: new FormControl()
		});
	}

	private setupEditForm(projectData): void {
		this.project = new FormGroup({
			name: new FormControl({value: projectData.name}),
			description: new FormControl({ value: projectData.description }),
			image: new FormControl({ value: projectData.image })
		});
		this.editorBody = projectData.body;
	}

	public saveProject(): void {
		this.projectData.name = this.getProjectValue("name");
		this.projectData.description = this.getProjectValue("description");
		this.projectData.image = this.getProjectValue("image");
		this.projectData.category_id = this.selectedCategory._id;
		this.projectData.body = this.editorBody;
		this.projectService.saveProject(this.projectData).subscribe((data) => {
			this.otherService.goToPage("resources");
		});
	}

	public cancel(): void {
		this.otherService.goToPage("resources");
	}
	
	public checkActiveCategory(category): any {
		return { "active": category.name === this.selectedCategory.name };
	}

	public getProjectValue(attr: string): string {
		let valueMap = this.project.controls[attr].value;
		if (valueMap && valueMap.value) {
			return valueMap.value;
		} else if (valueMap) {
			return valueMap;
		} else {
			return "";
		}
	}

	public matchCategorySelected(category): {"active": boolean} {
		return {"active": category._id === this.projectData.category_id};
	}

	public updateCategory(category): void {
		this.projectData.category_id = category._id;
		this.selectedCategory = category;
	}

	public getSelectedCategoryName(): string {
		return this.selectedCategory ? this.selectedCategory.name : "";
	}

}