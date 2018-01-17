import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {NgSelectModule} from "@ng-select/ng-select";

import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {SkillsComponent} from "./skills/skills.component";
import {ResourcesComponent} from "./resources/resources.component";
import {PlaygroundComponent} from "./playground/playground.component";
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./project/projects.component";
import {CategoryService} from "./services/category/category.service";
import {ProjectService} from "./services/project/project.service";
import {CarouselService} from "./services/carousel/carousel.service";
import {SkillsService} from "./services/skills/skills.service";
import {PortfolioService} from "./services/portfolio/portfolio.service";
import {Config} from "./services/configuration/config";
import {Http} from "@angular/http";
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppRoutingModule } from './/app-routing.module';

const routes: Routes = [
	{path: "", component: HomeComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		HeroDetailComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		SkillsComponent, 
		CarouselComponent,
		ProjectsComponent,
		ResourcesComponent,
		PlaygroundComponent
	],
	imports: [
		BrowserModule,
		CarouselModule,
		BsDropdownModule,
		AppRoutingModule,
		RouterModule.forRoot(routes),
		FormsModule,
		NgSelectModule
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
	bootstrap: [AppComponent],
	exports: [RouterModule]
})
export class AppModule { }
