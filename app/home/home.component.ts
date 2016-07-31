import {Component} from '@angular/core';
import {CarouselComponent} from "../carousel/carousel.component";
import {SkillsComponent} from "../skills/skills.component";
import {ProjectsComponent} from "../project/projects.component";

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html',
    directives: [
    	CarouselComponent, 
    	SkillsComponent, 
    	ProjectsComponent
    ]
})

export class HomeComponent { }