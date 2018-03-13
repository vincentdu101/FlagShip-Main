import {Component, OnInit} from "@angular/core";
import {ResourceService} from "../services/resource/resource.service";
import {CategoryService} from "../services/category/category.service";
import {ViewService} from "../services/view/view.service";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl} from "@angular/forms";
import {OtherService} from "../services/configuration/other.service";
import {IArticle, ICategory} from "../services/configuration/config";

@Component({
	templateUrl: "./new.resource.component.html",
	selector: "new-resource"
})
export class NewResourceComponent implements OnInit {

	public resourceData: IArticle = {
		_id: "",
		name: "",
		description: "",
		body: "",
		image: "",
		category_id: ""
	};
	public content;
	public categories: ICategory[] = [];
	public resource: FormGroup;
	public editorBody: string = "";
	public selectedCategory: ICategory;

	constructor(private resourceService: ResourceService,
		private categoryService: CategoryService,
		private viewService: ViewService,
		private activatedRoute: ActivatedRoute,
		private otherService: OtherService) {
		this.content = '<p>Hello <strong>World !</strong></p>';
		this.categoryService.getCategories().subscribe((data) => {
			this.categories = data;
			this.resourceData.category_id = this.categories[0]._id;
		});
	}

	ngOnInit() {
		this.initNewForm();
	}

	private initNewForm(): void {
		this.resource = new FormGroup({
			name: new FormControl(),
			description: new FormControl(),
			image: new FormControl()
		});
	}

	public saveProject(): void {
		this.resourceData.name = this.getResourceValue("name");
		this.resourceData.description = this.getResourceValue("description");
		this.resourceData.image = this.getResourceValue("image");
		this.resourceData.category_id = this.selectedCategory._id;
		this.resourceData.body = this.editorBody;
		this.resourceService.createResource(this.resourceData).subscribe((data) => {
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
		return this.viewService.getResourceValue(this.resource, attr);
	}

	public matchCategorySelected(category): { "active": boolean } {
		return { "active": category._id === this.resourceData.category_id };
	}

	public updateCategory(category): void {
		this.resourceData.category_id = category._id;
		this.selectedCategory = category;
	}

	public getSelectedCategoryName(): string {
		return this.selectedCategory ? this.selectedCategory.name : "";
	}

}