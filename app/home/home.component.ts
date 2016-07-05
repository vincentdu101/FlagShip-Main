import {Component} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {CarouselComponent} from "../carousel/carousel.component";
import {SkillsComponent} from "../skills/skills.component";
import {ProjectsComponent} from "../project/projects.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html',
    directives: [
    	HeaderComponent, 
    	CarouselComponent, 
    	SkillsComponent, 
    	ProjectsComponent,
    	FooterComponent
    ]
})

export class HomeComponent { }