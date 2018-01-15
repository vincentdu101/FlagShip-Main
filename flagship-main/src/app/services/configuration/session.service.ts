import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';


@Injectable()
export class Session {

	public sessionObservable;
	private sessionObserver;
	private currentUser; 

	constructor(private http: Http) {	
		this.sessionObservable = new Observable((observer) => {
			this.sessionObserver = observer;
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

	public loginUser(formData: {username: {}, password: {}}) {
		if (formData.username && formData.password) {
			this.http.post("http://localhost:8080/login", this.asyncRequestParse(formData))
				.subscribe(data => {
					debugger;
					// this.currentUser = JSON.parse(data._body);
					this.sessionObserver.next({ success: this.currentUser });
				});
		} else {
			this.sessionObserver.next({ error: "missing username or password" });
		}
	}	



}