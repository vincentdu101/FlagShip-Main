import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {Session} from "../services/configuration/session.service";


@Component({
	selector: "header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"]
})

export class HeaderComponent {

	public login = { username: "", password: "" };
	public user = {};
	public mobileToggle = false;
	public bars = [
		{ name: "Home", url: "/", active: false },
		{ name: "About", url: "/about", active: false },
		{ name: "Portfolio", url: "/projects", dropdown: [], active: false }
	];
	
	constructor(private router: Router, private http: Http,
				private Session: Session) {
		this.hideDropdownClick();
	}

	private hideDropdownClick(): void {
		// $("html").click(() => {
		// 	for (var i = 0; i < this.bars.length; i++) {
		// 		this.bars[i].active = false;
		// 	}
		// });
	}

	public goToPage(page: string, config = {}) {
		this.router.navigate([page, config]);
	}

	public loginUser(): void {
		let formData = { username: this.login.username, password: this.login.password };
		this.Session.loginUser(formData);
		let sessionObservable = this.Session.sessionObservable.subscribe((data) => {
			if (data.success) {
				this.user = data.success;
				sessionObservable.unsubscribe();
				// $(".login-modal").modal({ show: false });
			}
		});
	}

	public triggerSlideToggle(): void {
		// $("nav ul").slideToggle();
	}

}