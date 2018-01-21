import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable, Subject} from "rxjs";

@Injectable() 
export class CategoryService {

	private categories = [];
	public categorySubject: Subject<any>;

	constructor(private http: Http) {
		this.categorySubject = new Subject();
		this.loadAllCategories();
	}

	private TYPE = {
		"Projects": "primary",
		"Skill": "warning"
	};

	public determineArticleCategory(category_id) {
		var category = this.findCategoryById(category_id);
		return "<span class='label label-" + this.TYPE[category.name] + "'>" + 
				category.name + "</span>";
	}	

	public loadAllCategories(): void {
		let observable = Observable.create((observer) => {
			this.http.get("http://localhost:8080/categories").subscribe((data) => {
				this.categories = data.json();
				this.categorySubject.next(this.categories);
			});
		});
		observable.subscribe();
	}

	public findCategoryById(id: string) {
		return this.categories.filter((data) => { 
			if (data._id === id) {
				return data;
			} 
		})[0];
	} 

	public findCategoryByName(name: string) {
		return this.categories.filter((data) => {
			if (data.name === name) {
				return data;
			}
		})[0];
	}

	public getCategories() {
		return this.categories;
	}

}