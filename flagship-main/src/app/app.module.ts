import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {NgSelectModule} from "@ng-select/ng-select";
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {SkillsComponent} from "./skills/skills.component";
import {ResourcesComponent} from "./resources/resources.component";
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./project/projects.component";
import {EditProjectComponent} from "./project/edit.project.component";
import {NewProjectComponent} from "./project/new.project.component";
import {ViewProjectComponent} from "./project/view.project.component";
import {ProjectsIndexComponent} from "./project/projects.index.component";

import {CategoryService} from "./services/category/category.service";
import {ProjectService} from "./services/project/project.service";
import {CarouselService} from "./services/carousel/carousel.service";
import {SkillsService} from "./services/skills/skills.service";
import {PortfolioService} from "./services/portfolio/portfolio.service";
import {Config} from "./services/configuration/config";
import {Session} from "./services/configuration/session.service";

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
		ResourcesComponent
	],
	imports: [
		BrowserModule,
		CarouselModule,
		BsDropdownModule,
		AppRoutingModule,
		RouterModule.forRoot(routes),
		FormsModule,
		NgSelectModule,
		HttpModule,
		HttpClientModule
	],
	providers: [
		CategoryService,
		ProjectService,
		CarouselService,
		SkillsService,
		PortfolioService,
		Config,
		Session
	],
	bootstrap: [AppComponent],
	exports: [RouterModule]
})
export class AppModule { }
