import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {CategoryService} from "../category/category.service";

@Injectable() 
export class SkillsService {

	constructor(private http:Http,
				private categoryService: CategoryService) {

	}

	public getSkills() {
		var skillCategory = this.categoryService.findCategoryByName("Skills");
		return this.http.get("http://localhost:8080/articles?category_id=" + skillCategory._id);
	}

}