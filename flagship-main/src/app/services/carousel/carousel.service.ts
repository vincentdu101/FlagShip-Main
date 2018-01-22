import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../category/category.service";
import {Observable, Observer} from "rxjs";

@Injectable()
export class CarouselService {

	private carouselObserver: Observer<any>;
	private slideUrl: string = "http://localhost:8080/articles?category_id=";
	public carouselObservable: Observable<any>;

	constructor(private http: HttpClient,
				private categoryService: CategoryService) {
	}

	public getSlides(): Observable<any> {
		return Observable.create((observer) => {
			this.categoryService.categorySubject.subscribe(() => {
				var slideCategory = this.categoryService.findCategoryByName("Slideshow");
				this.http.get(this.slideUrl + slideCategory._id).subscribe((data) => {
					observer.next(data);
				});
			});
		});
	}



}