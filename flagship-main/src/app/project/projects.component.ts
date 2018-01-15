import {Component} from "@angular/core";
import {PortfolioService} from "../services/portfolio/portfolio.service";

@Component({
	selector: "projects",
	templateUrl: "./projects.component.html"
})

export class ProjectsComponent {

	public portfolio: Array<any> = [];
	public portfolioOptions: Array<any> = [];
	public currentProject: any = { 
		name: "Choose Project", 
		description: "to view", 
		image: "" 
	};

	constructor(private portfolioService: PortfolioService) {
		this.portfolioService.getPortfolio().subscribe((data) => {
			this.portfolio = this.initPortfolioActive(data.json());
			this.portfolioOptions = this.portfolioService.parsePortfolio(this.portfolio);
		});
	}

	private initPortfolioActive(data) {
		return data.map((item) => {
			item.active = false;
			return item;
		});
	}

	public portfolioSelected(item: any): void {
		this.currentProject = this.portfolio.filter((data) => {
			return data.name === item.text;
		})[0];
	}

}