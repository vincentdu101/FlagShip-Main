import {Component} from "@angular/core";
import {SkillsService} from "../services/skills/skills.service";
import * as d3 from "d3";

@Component({
	selector: "skills",
	templateUrl: "./skills.component.html",
	styleUrls: ["./skills.component.scss"]
})

export class SkillsComponent {
	
	public skills: Array<any> = [];

	constructor(private skillsService: SkillsService) {
		this.skillsService.getSkills().subscribe((data) => {
			this.skills = data;
		});
		this.setupCharts();
	}

	private setupCharts(): void {
		console.log(d3);
	}

}