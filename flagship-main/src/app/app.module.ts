import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {SkillsComponent} from "./skills/skills.component";
import {ResourcesComponent} from "./resources/resources.component";
import {PlaygroundComponent} from "./playground/playground.component";
import {HomeComponent} from "./home/home.component";
import {ProjectsIndexComponent} from "./project/projects.index.component";
import {CategoryService} from "./services/category/category.service";
import {ProjectService} from "./services/project/project.service";
import {CarouselService} from "./services/carousel/carousel.service";
import {SkillsService} from "./services/skills/skills.service";
import {PortfolioService} from "./services/portfolio/portfolio.service";
import {Config} from "./services/configuration/config";
import {Http} from "@angular/http";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
	declarations: [
		AppComponent,
		HeroDetailComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		CarouselModule,
		BsDropdownModule
	],
	providers: [
		CategoryService,
		ProjectService,
		CarouselService,
		SkillsService,
		PortfolioService,
		Config,
		Http
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
