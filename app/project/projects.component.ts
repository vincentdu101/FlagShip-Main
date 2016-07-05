import {Component} from "@angular/core";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
	selector: "projects",
	templateUrl: "./app/project/projects.component.html",
	directives: [HeaderComponent, FooterComponent]
})

export class ProjectsComponent {

}