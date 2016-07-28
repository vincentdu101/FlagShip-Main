import {Component} from "@angular/core";
import {SkillsService} from "../services/skills/skills.service";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";

@Component({
	selector: "skills",
	templateUrl: "./app/skills/skills.component.html",
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class SkillsComponent {
	
	public skills: Array<any> = [];

	constructor(private skillsService: SkillsService) {
		this.skillsService.getSkills().subscribe((data) => {
			this.skills = data.json();
		});
	}



}