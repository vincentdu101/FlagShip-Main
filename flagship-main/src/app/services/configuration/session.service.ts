import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';


@Injectable()
export class SessionService {

	private currentUser; 
	public sessionSubject: Subject<any>;

	constructor(private http: HttpClient) {}

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

	public loginUser(formData: {username: string, password: string}): Observable<any> {
		if (formData.username && formData.password) {
			return Observable.create((observer) => {
				this.http.post("http://localhost:8080/login", formData).subscribe(data => {
					debugger;
					this.currentUser = data;
					observer.next({success: this.currentUser});
					this.sessionSubject.next({ success: this.currentUser });
				});
			});
		} else {
			return Observable.create((observer) => { observer.next({error: "Form not complete"})});
		}
	}	



}