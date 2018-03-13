import {Component, OnInit} from "@angular/core";
import {SkillsService} from "../services/skills/skills.service";
import {CategoryService} from "../services/category/category.service";
import {ViewService} from "../services/view/view.service";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl} from "@angular/forms";
import {OtherService} from "../services/configuration/other.service";
import {ISkill, ICategory} from "../services/configuration/config";

@Component({
	templateUrl: "./new.skill.component.html",
	selector: "new-skill"
})
export class NewSkillComponent implements OnInit {

	public skillData: ISkill = {
		_id: "",
		name: "",
		level: 0,
		category_id: ""
	};
	public content;
	public categories: ICategory[] = [];
	public skill: FormGroup;
	public editorBody: string = "";
	public selectedCategory: ICategory;

	constructor(private skillsService: SkillsService,
		private categoryService: CategoryService,
		private activatedRoute: ActivatedRoute,
		private viewService: ViewService,
		private otherService: OtherService) {
		this.categoryService.getCategories().subscribe((data) => {
			this.categories = data;
			this.skillData.category_id = this.categories.filter((cat) => {
				return cat.name === "Skills";
			})[0]._id;
		});
	}

	ngOnInit() {
		this.initNewForm();
	}

	private initNewForm(): void {
		this.skill = new FormGroup({
			name: new FormControl(),
			level: new FormControl(),
			image: new FormControl()
		});
	}

	public saveSkill(): void {
		this.skillData.name = this.viewService.getResourceValue(this.skill, "name");
		this.skillData.level = parseInt(this.viewService.getResourceValue(this.skill, "level"));
		this.skillsService.createSkill(this.skillData).subscribe((data) => {
			this.otherService.goToPage("resources");
		});
	}

	public getResourceValue(attr: string): any {
		return this.viewService.getResourceValue(this.skill, attr);
	}

	public cancel(): void {
		this.otherService.goToPage("resources");
	}

}