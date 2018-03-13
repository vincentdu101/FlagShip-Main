import {Component, OnInit} from "@angular/core";
import {SkillsService} from "../services/skills/skills.service";
import {CategoryService} from "../services/category/category.service";
import {ViewService} from "../services/view/view.service";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl} from "@angular/forms";
import {OtherService} from "../services/configuration/other.service";
import {ISkill, ICategory} from "../services/configuration/config";

@Component({
	templateUrl: "./edit.skill.component.html",
	selector: "edit-skill"
})
export class EditSkillComponent implements OnInit {

	public skillData: ISkill;
	public categories: ICategory[] = [];
	public skill: FormGroup;
	public editorBody: string = "";

	constructor(private skillsService: SkillsService,
				private categoryService: CategoryService,
				private viewService: ViewService,
				private activatedRoute: ActivatedRoute,
				private otherService: OtherService) {
		this.categoryService.getCategories().subscribe((data) => {
			this.categories = data;
		});
	}

	ngOnInit() {
		const id = this.activatedRoute.snapshot.params.id;
		const type = this.activatedRoute.snapshot.queryParams.type;
		this.initEditForm();
		this.skillsService.getSkill(id).subscribe((data: ISkill) => {
			this.skillData = data;
			this.setupEditForm(this.skillData);
		});
	}

	private initEditForm(): void {
		this.skill = new FormGroup({
			name: new FormControl(),
			level: new FormControl()
		});
	}

	private setupEditForm(skillData): void {
		this.skill = new FormGroup({
			name: new FormControl({value: skillData.name}),
			level: new FormControl({ value: skillData.level })
		});
		this.editorBody = skillData.body;
	}

	public saveSkill(): void {
		this.skillData.name = this.viewService.getResourceValue(this.skill, "name");
		this.skillData.level = parseInt(this.viewService.getResourceValue(this.skill, "level"));
		this.skillsService.saveSkill(this.skillData).subscribe((data) => {
			this.otherService.goToPage("resources");
		});
	}

	public getResourceValue(attr: string): string {
		return this.viewService.getResourceValue(this.skill, attr);
	}

	public cancel(): void {
		this.otherService.goToPage("resources");
	}

}