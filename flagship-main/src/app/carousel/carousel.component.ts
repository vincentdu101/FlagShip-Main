import {Component, OnInit} from "@angular/core";
import {CarouselService} from "../services/carousel/carousel.service";

@Component({
	selector: "carousel-setup",
	templateUrl: "./carousel.component.html",
    styleUrls: ["./carousel.component.scss"]
})

export class CarouselComponent implements OnInit {

    public intervalChange:number = 5000;
    public slides: Array<any> = [];

    public constructor(private carouselService: CarouselService) {

    }

    ngOnInit() {
        this.carouselService.carouselObservable.subscribe((data) => {
            this.slides = data.json();
        });
    }
	
}