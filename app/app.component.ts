import {Component} from "@angular/core";
import {RouterConfig, RouterOutlet, ROUTER_DIRECTIVES} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {CategoryService} from "./services/category/category.service";
import {ProjectService} from "./services/project/project.service";
import {CarouselService} from "./services/carousel/carousel.service";
import {SkillsService} from "./services/skills/skills.service";
import {PortfolioService} from "./services/portfolio/portfolio.service";
import {Config} from "./services/configuration/config";
import {Http} from "@angular/http";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES, RouterOutlet, HeaderComponent, FooterComponent],
    providers: [
    	ProjectService, 
    	CategoryService, 
    	CarouselService, 
    	SkillsService,
    	PortfolioService,
        Config
    ]
})

export class AppComponent {

	constructor(private projectService: ProjectService,
				private categoryService: CategoryService) {
		
		this.categoryService.loadAllCategories();
	
	}

}