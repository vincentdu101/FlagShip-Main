import {Component} from "@angular/core";
import {PortfolioService} from "../services/portfolio/portfolio.service";
import {IArticle} from "../services/configuration/config";

@Component({
	selector: "projects",
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.scss"]
})

export class ProjectsComponent {

	public portfolio: Array<IArticle> = [];
	constructor(private portfolioService: PortfolioService) {
		this.portfolioService.getPortfolio().subscribe((data) => {
			this.portfolio = data;
		});
	}

}