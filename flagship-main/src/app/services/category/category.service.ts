import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable, Observer} from "rxjs";

@Injectable() 
export class CategoryService {

	private categories = [];
	public categoryObservable: Observable<any>;
	public categoryObserver: Observer<any>;

	constructor(private http: Http) {
		this.categoryObservable = Observable.create((observer) => {
			this.categoryObserver = observer;
		});
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
		this.http.get("http://localhost:8080/categories")
			.subscribe((data) => {
				this.categories = data.json();
				this.categoryObserver.next(this.categories);
			});
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