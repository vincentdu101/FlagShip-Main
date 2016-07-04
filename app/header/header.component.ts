import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {FORM_DIRECTIVES, NgIf} from "angular2/common";
import {Http, HTTP_PROVIDERS} from "angular2/http";
import {Session} from "../services/configuration/session.service";


@Component({
	selector: "header",
	templateUrl: "./app/header/header.component.html",
	providers: [HTTP_PROVIDERS, Session],
	directives: [FORM_DIRECTIVES, NgIf]
})

export class HeaderComponent {

	public login = { username: "", password: "" };
	public user = undefined;
	
	constructor(private router: Router, private http: Http,
				private Session: Session) {

	}

	public goToPage(page, config = {}) {
		this.router.navigate([page, config]);
	}

	public loginUser() {
		let formData = { username: this.login.username, password: this.login.password };
		this.Session.loginUser(formData);
		let sessionObservable = this.Session.sessionObservable.subscribe((data) => {
			if (data.success) {
				this.user = data.success;
				sessionObservable.unsubscribe();
				$(".login-modal").modal({ show: false });
			}
		});
	}

}