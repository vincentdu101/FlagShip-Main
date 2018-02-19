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
export class ResourceService {

	public resourceObservable;
	private resourceObserver;

	constructor(private http: HttpClient,
				private categoryService: CategoryService,
				private router: Router,
				private config: Config) {
		this.resourceObservable = new Observable((observer) => {
			this.resourceObserver = observer;
		});
	}

	private generatePostUrlParams(resource): any {
		resource.category_id = this.categoryService.findCategoryByName(resource.category)._id;
	} 

	private fetchResources(resourceCategory, options): Observable<any> {
		return this.http.get(this.config.serverArticlesPath + resourceCategory._id + "&name=" + options.name);
	}

	public getAllTypeResources(type: string, options = {name: undefined}): Observable<any> {
		return Observable.create((observer) => {
			this.categoryService.getResources(type, "&name=" + options.name).subscribe((resources) => {
				observer.next(resources);
			});
		});
	}

	public createResource(resource) {
		var params = this.generatePostUrlParams(resource);
		this.http.post("http://localhost:8080/articles", params.body, params.options)
			.subscribe(data => {
				this.router.navigate(["/resources"]);
			});
	}

	public saveResource(resource) {
		return this.http.put("http://localhost:8080/articles/" + resource._id, resource);
	}

	public getResource(id: string) {
		return this.http.get("http://localhost:8080/articles/" + id);
	}

}