import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import {CategoryService} from "../category/category.service";
import {Config} from "../configuration/config";

@Injectable() 
export class ProjectService {

	public projectObservable;
	private projectObserver;
	private 

	constructor(private http: HttpClient,
				private categoryService: CategoryService,
				private router: Router,
				private config: Config) {
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

	private generatePostUrlParams(project): any {
		project.category_id = this.categoryService.findCategoryByName(project.category)._id;
		
		// var urlParams = {body: "", headers: undefined, options: undefined};
		// urlParams.body = JSON.stringify(project);
		// urlParams.headers = new Headers({ "Content-Type": "application/json" });
		// urlParams.options = new RequestOptions({ headers: urlParams.headers });

		// return urlParams;
	} 

	private fetchProjects(projectCategory, options): Observable<any> {
		return this.http.get(this.config.serverArticlesPath + projectCategory._id + "&name=" + options.name);
	}

	public getAllProjects(options = {name: undefined}): Observable<any> {
		return Observable.create((observer) => {
			this.categoryService.getResources("Projects", "&name=" + options.name).subscribe((projects) => {
				observer.next(projects);
			});
		});
	}

	public createProject(project) {
		var params = this.generatePostUrlParams(project);
		this.http.post("http://localhost:8080/articles", params.body, params.options)
			.subscribe(data => {
				this.router.navigate(["/projects"]);
			});
	}

	public saveProject(project) {
		return this.http.put("http://localhost:8080/articles/" + project._id, project);
	}

	public getProject(id: string) {
		return this.http.get("http://localhost:8080/articles/" + id);
	}

}