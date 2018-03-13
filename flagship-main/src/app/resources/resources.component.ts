import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {SessionService} from "../services/configuration/session.service";
import {ResourceService} from "../services/resource/resource.service";
import {SkillsService} from "../services/skills/skills.service";
import {CategoryService} from "../services/category/category.service";
import {IArticle, ISkill} from "../services/configuration/config";
import {OtherService} from "../services/configuration/other.service";

@Component({
	templateUrl: "./resources.component.html",
	styleUrls: ["./resources.component.scss"]
})

export class ResourcesComponent {

	public projects: IArticle[];
	public skills: ISkill[];

	constructor(private sessionService: SessionService, 
				private otherService: OtherService,
				private resourceService: ResourceService,
				private categoryService: CategoryService,
				public skillsService: SkillsService) {
		this.sessionService.checkLoginStatus();
		this.getResources();
		this.getSkills();
	}

	public getResources(): void {
		this.categoryService.getAllResources().subscribe((projects) => {
			this.projects = projects;
		});
	}

	public getCategoryInfo(id: string): string {
		return this.categoryService.getArticleCategoryInfo(id);
	}

	public editResourceLink(resource: IArticle): void {
		let resourceType = this.getCategoryInfo(resource.category_id).toLowerCase();
		this.otherService.goToPage(
			"/resources/edit/" + resource._id, 
			{ queryParams: { type: resourceType } }
		);
	}

	public getSkills(): void {
		this.skillsService.getSkills().subscribe((skills: ISkill[]) => {
			this.skills = skills;
		});
	}

	public viewResourceLink(resource: IArticle): void {
		this.otherService.goToPage("/resources/" + resource._id);
	}

	public newResourceLink(): void {
		this.otherService.goToPage("/resources/new");
	}

	public deleteResourceLink(resource: IArticle): void {
		this.resourceService.deleteResource(resource._id).subscribe((data) => {
			this.getResources();
		});
	}
	
	public newSkillLink(): void {
		this.otherService.goToPage("/skills/new");
	}

	public editSkillLink(skill: ISkill): void {
		this.otherService.goToPage("/skills/edit/" + skill._id);
	}

	public deleteSkillLink(skill: ISkill): void {
		this.skillsService.deleteSkill(skill._id).subscribe(() => {
			this.getSkills();
		});
	}	

}