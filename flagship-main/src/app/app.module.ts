import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {NgSelectModule} from "@ng-select/ng-select";
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './/app-routing.module';
import {ModalModule} from "ngx-bootstrap/modal";
import {ReactiveFormsModule} from "@angular/forms";
import { NgxEditorModule } from 'ngx-editor';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {SkillsComponent} from "./skills/skills.component";
import {ResourcesComponent} from "./resources/resources.component";
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./project/projects.component";
import {EditResourceComponent} from "./resources/edit.resource.component";
import {NewResourceComponent} from "./resources/new.resource.component";
import {ViewResourceComponent} from "./resources/view.resource.component";

import {CategoryService} from "./services/category/category.service";
import {ResourceService} from "./services/resource/resource.service";
import {CarouselService} from "./services/carousel/carousel.service";
import {SkillsService} from "./services/skills/skills.service";
import {PortfolioService} from "./services/portfolio/portfolio.service";
import {Config} from "./services/configuration/config";
import {OtherService} from "./services/configuration/other.service";
import {SessionService} from "./services/configuration/session.service";

const routes: Routes = [
	{path: "", component: HomeComponent},
	{path: "resources", component: ResourcesComponent},
	{path: "projects", component: ProjectsComponent},
	{path: "resources/new", component: NewResourceComponent},
	{path: "resources/edit/:id", component: EditResourceComponent},
	{path: "resources/:id", component: ViewResourceComponent},
	{path: "skills", component: SkillsComponent},
	{path: "**", component: HomeComponent}
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
		EditResourceComponent,
		ViewResourceComponent,
		NewResourceComponent,
		ResourcesComponent
	],
	imports: [
		BrowserModule,
		CarouselModule,
		BsDropdownModule.forRoot(),
		AppRoutingModule,
		RouterModule.forRoot(routes),
		FroalaEditorModule.forRoot(), 
		FroalaViewModule.forRoot(),
		FormsModule,
		NgSelectModule,
		HttpClientModule,
		ModalModule.forRoot(),
		ReactiveFormsModule
	],
	providers: [
		CategoryService,
		OtherService,
		ResourceService,
		CarouselService,
		SkillsService,
		PortfolioService,
		Config,
		SessionService
	],
	bootstrap: [AppComponent],
	exports: [RouterModule]
})
export class AppModule { }
