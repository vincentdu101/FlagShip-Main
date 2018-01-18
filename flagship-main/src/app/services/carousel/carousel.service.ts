import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {CategoryService} from "../category/category.service";
import {Observable, Observer} from "rxjs";

@Injectable()
export class CarouselService {

	private carouselObserver: Observer<any>;
	public carouselObservable: Observable<any>;

	constructor(private http: Http,
				private categoryService: CategoryService) {
		this.carouselObservable = Observable.create((observer) => {
			this.carouselObserver = observer;
		});
	}

	public getSlides(): void {
		this.categoryService.categoryObservable.subscribe(() => {
			var slideCategory = this.categoryService.findCategoryByName("Slideshow");
			if (!!slideCategory) {
				this.http.get("http://localhost:8080/articles?category_id=" + slideCategory._id);
			}
		});
	}



}