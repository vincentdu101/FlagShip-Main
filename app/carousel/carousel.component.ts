import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {CAROUSEL_DIRECTIVES} from "ng2-bootstrap/components/carousel";
import {CarouselService} from "../services/carousel/carousel.service";

@Component({
	selector: "carousel",
	templateUrl: "./app/carousel/carousel.component.html",
    directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class CarouselComponent {

    public intervalChange:number = 5000;
    public slides: Array<any> = [];

    public constructor(private carouselService: CarouselService) {
        this.carouselService.getSlides().subscribe((data) => {
            this.slides = data.json();
        })
    }
	
}