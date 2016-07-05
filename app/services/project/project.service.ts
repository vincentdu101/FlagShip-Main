import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';

@Injectable() 
export class ProjectService {

	public projectObservable;
	private projectObserver;

	constructor(private http: Http) {
		this.projectObservable = new Observable((observer) => {
			this.projectObserver = observer;
		}).share();
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
		project.category_id = "56d2368fbefe83262d3e14e4";
		this.http.post("http://localhost:8080/articles", this.asyncRequestParse(project))
			.subscribe(data => {
				debugger;
			});
	}

}