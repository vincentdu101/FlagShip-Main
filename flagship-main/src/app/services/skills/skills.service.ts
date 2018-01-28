import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../category/category.service";
import {Observable} from "rxjs";

@Injectable() 
export class SkillsService {

	constructor(private http: HttpClient,
				private categoryService: CategoryService) {

	}

	public getSkills() {
		return Observable.create((observer) => {
			this.categoryService.getResources("Skills").subscribe((slides) => {
				observer.next(slides);
			});
		});
	}

}