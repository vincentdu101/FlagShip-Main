import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {SessionService} from "../services/configuration/session.service";
import {ProjectService} from "../services/project/project.service";
import {SkillsService} from "../services/skills/skills.service";
import {CategoryService} from "../services/category/category.service";
import {IArticle} from "../services/configuration/config";
import {OtherService} from "../services/configuration/other.service";

@Component({
	templateUrl: "./resources.component.html",
	styleUrls: ["./resources.component.scss"]
})

export class ResourcesComponent {

	public projects: IArticle[];
	public skills: IArticle[];

	constructor(private sessionService: SessionService, 
				private otherService: OtherService,
				private projectService: ProjectService,
				private categoryService: CategoryService,
				public skillsService: SkillsService) {
		this.sessionService.checkLoginStatus();
		this.getResources();
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
		this.otherService.goToPage("/" + resourceType + "/edit/" + resource._id);
	}
	

}