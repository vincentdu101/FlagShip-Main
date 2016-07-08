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
		this.http.get("http://localhost:8080/categories")
			.subscribe((data) => {
				this.categories = data.json();
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