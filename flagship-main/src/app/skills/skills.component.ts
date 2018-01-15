import {Component} from "@angular/core";
import {SkillsService} from "../services/skills/skills.service";

@Component({
	selector: "skills",
	templateUrl: "./skills.component.html"
})

export class SkillsComponent {
	
	public skills: Array<any> = [];

	constructor(private skillsService: SkillsService) {
		this.skillsService.getSkills().subscribe((data) => {
			this.skills = data.json();
		});
	}



}