import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable() 
export class CategoryService {

	private categories = [];

	constructor(private http: Http) {
	}

	private TYPE = {
		"Projects": "primary",
		"Skill": "warning"
	};

	public determineArticleCategory(category_id) {
		var category = this.findCategory(category_id);
		return "<span class='label label-" + this.TYPE[category.name] + "'>" + 
				category.name + "</span>";
	}	

	public getAllCategories(): void {
		return this.http.get("http://localhost:8080/categories")
			.map((data: Response) => {
				return JSON.parse(data._body); 
			})
			.subscribe((data) => {
				this.categories = data;
			});
	}

	public findCategory(id: string) {
		return this.categories.filter((data) => { 
			if (data._id === id) {
				return data;
			} 
		})[0];
	} 

}