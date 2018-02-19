import {Component, OnInit} from "@angular/core";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl} from "@angular/forms";
import {OtherService} from "../services/configuration/other.service";
import {IArticle, ICategory} from "../services/configuration/config";

@Component({
	templateUrl: "./edit.resource.component.html",
	selector: "edit-resource"
})
export class EditResourceComponent implements OnInit {

	public resourceData: IArticle;
	public content;
	public categories: ICategory[] = [];
	public resource: FormGroup;
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
		const id = this.activatedRoute.snapshot.params.id;
		const type = this.activatedRoute.snapshot.queryParams.type;
		this.initEditForm();
		this.projectService.getProject(id).subscribe((data: IArticle) => {
			this.resourceData = data;
			this.selectedCategory = this.categoryService.findCategoryById(this.resourceData.category_id);
			this.setupEditForm(this.resourceData);
		});
	}

	private initEditForm(): void {
		this.resource = new FormGroup({
			name: new FormControl(),
			description: new FormControl(),
			image: new FormControl()
		});
	}

	private setupEditForm(resourceData): void {
		this.resource = new FormGroup({
			name: new FormControl({value: resourceData.name}),
			description: new FormControl({ value: resourceData.description }),
			image: new FormControl({ value: resourceData.image })
		});
		this.editorBody = resourceData.body;
	}

	public saveProject(): void {
		this.resourceData.name = this.getResourceValue("name");
		this.resourceData.description = this.getResourceValue("description");
		this.resourceData.image = this.getResourceValue("image");
		this.resourceData.category_id = this.selectedCategory._id;
		this.resourceData.body = this.editorBody;
		this.projectService.saveProject(this.resourceData).subscribe((data) => {
			this.otherService.goToPage("resources");
		});
	}

	public cancel(): void {
		this.otherService.goToPage("resources");
	}
	
	public checkActiveCategory(category): any {
		return { "active": category.name === this.selectedCategory.name };
	}

	public getResourceValue(attr: string): string {
		let valueMap = this.resource.controls[attr].value;
		if (valueMap && valueMap.value) {
			return valueMap.value;
		} else if (valueMap) {
			return valueMap;
		} else {
			return "";
		}
	}

	public matchCategorySelected(category): {"active": boolean} {
		return {"active": category._id === this.resourceData.category_id};
	}

	public updateCategory(category): void {
		this.resourceData.category_id = category._id;
		this.selectedCategory = category;
	}

	public getSelectedCategoryName(): string {
		return this.selectedCategory ? this.selectedCategory.name : "";
	}

}