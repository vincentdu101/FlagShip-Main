import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {CAROUSEL_DIRECTIVES} from "ng2-bootstrap/components/carousel";

@Component({
	selector: "carousel",
	templateUrl: "./app/carousel/carousel.component.html",
    directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class CarouselComponent {

    public intervalChange:number = 5000;
    public slides: Array<any> = [];

    public constructor() {
        this.slides = [
            { text: "Innovation", image: "app/images/slides/innovation.jpg" }, 
            { text: "Experience" },
            { text: "Passion"}
        ];
    }
	
}