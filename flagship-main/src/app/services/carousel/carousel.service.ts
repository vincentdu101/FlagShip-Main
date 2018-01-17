import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {CategoryService} from "../category/category.service";
import {Observable} from "rxjs";

@Injectable()
export class CarouselService {

	constructor(private http: Http,
				private categoryService: CategoryService) {
	}

	public getSlides() {
		var slideCategory = this.categoryService.findCategoryByName("Slideshow");
		if (!!slideCategory) {
			return this.http.get("http://localhost:8080/articles?category_id=" + slideCategory._id);
		} else {
			return Observable.empty<any>();
		}
	}



}