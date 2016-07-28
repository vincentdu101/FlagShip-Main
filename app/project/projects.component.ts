import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {PortfolioService} from "../services/portfolio/portfolio.service";
import {SELECT_DIRECTIVES} from "ng2-select/ng2-select";

@Component({
	selector: "projects",
	templateUrl: "./app/project/projects.component.html",
	directives: [SELECT_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class ProjectsComponent {

	public portfolio: Array<any> = [];
	public portfolioOptions: Array<any> = [];

	constructor(private portfolioService: PortfolioService) {
		this.portfolioService.getPortfolio().subscribe((data) => {
			this.portfolio = data.json();
			this.initPortfolioActive();
			this.portfolioOptions = this.portfolioService.parsePortfolio(this.portfolio);
		});
	}

	private initPortfolioActive() {
		this.portfolio.map((data) => {
			data.active = false;
			return data;
		});
	}

	public portfolioSelected(value: any) {
		debugger;
	}

}