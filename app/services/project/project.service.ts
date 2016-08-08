import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import {CategoryService} from "../category/category.service";

@Injectable() 
export class ProjectService {

	public projectObservable;
	private projectObserver;

	constructor(private http: Http,
				private categoryService: CategoryService,
				private router: Router) {
		this.projectObservable = new Observable((observer) => {
			this.projectObserver = observer;
		});
	}

	private asyncRequestParse(data) {
		var str = [];
		for (var key in data) {
			if (data[key] instanceof Array) {
				for (var idx in data[key]) {
					var subObj = data[key][idx];
					for (var subKey in subObj) {
						str.push(encodeURIComponent(key) + "[" + idx + "][" + encodeURIComponent(subKey) + "]=" + encodeURIComponent(subObj[subKey]));
					}
				}
			} else {
				str.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
			}
		}
		return str.join("&");
	}	

	public getAllProjects() {
		return this.http.get("http://localhost:8080/articles?category_id=56d2368fbefe83262d3e14e4");
	}

	public createProject(project) {
		project.category_id = this.categoryService.findCategoryByName("Projects")._id;
		
		let body = JSON.stringify(project);
		let headers = new Headers({ "Content-Type": "application/json" });
		let options = new RequestOptions({ headers: headers });
			
		this.http.post("http://localhost:8080/articles", body, options)
			.subscribe(data => {
				this.router.navigate(["/projects"]);
			});
	}

	public getProject(id: string) {
		return this.http.get("http://localhost:8080/articles/" + id);
	}

}