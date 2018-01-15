import {Component} from "@angular/core";
import {CarouselService} from "../services/carousel/carousel.service";

@Component({
	selector: "carousel",
	templateUrl: "./carousel.component.html"
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