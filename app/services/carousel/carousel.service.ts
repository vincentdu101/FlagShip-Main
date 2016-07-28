import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {CategoryService} from "../category/category.service";

@Injectable()
export class CarouselService {

	constructor(private http: Http,
				private categoryService: CategoryService) {
	}

	public getSlides() {
		var slideCategory = this.categoryService.findCategoryByName("Slideshow");
		return this.http.get("http://localhost:8080/articles?category_id=" + slideCategory._id);
	}



}