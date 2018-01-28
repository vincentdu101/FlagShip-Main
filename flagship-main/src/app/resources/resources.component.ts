import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {SessionService} from "../services/configuration/session.service";
import {ProjectService} from "../services/project/project.service";
import {SkillsService} from "../services/skills/skills.service";
import {CategoryService} from "../services/category/category.service";
import {IArticle} from "../services/configuration/config";

@Component({
	templateUrl: "./resources.component.html"
})

export class ResourcesComponent {

	public projects: IArticle[];
	public skills: IArticle[];

	constructor(private sessionService: SessionService, 
				private router: Router,
				private projectService: ProjectService,
				private categoryService: CategoryService,
				public skillsService: SkillsService) {
		this.sessionService.checkLoginStatus();
		this.getResources();
	}

	public getResources(): void {
		this.projectService.getAllProjects().subscribe((projects) => {
			this.projects = projects;
		});
	}

	public getCategoryInfo(id: string): string {
		return this.categoryService.determineArticleCategory(id);
	}

	

}