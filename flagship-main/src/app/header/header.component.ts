import {Component, TemplateRef, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {SessionService} from "../services/configuration/session.service";
import {BsModalService} from "ngx-bootstrap/modal";
import {BsModalRef} from "ngx-bootstrap/modal/bs-modal-ref.service";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
	selector: "header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"]
})

export class HeaderComponent implements OnInit {

	private modalRef: BsModalRef;
	public user = {};
	public mobileToggle = false;
	public bars = [
		{ name: "Home", url: "/", active: false },
		{ name: "About", url: "/about", active: false },
		{ name: "Portfolio", url: "/projects", dropdown: [], active: false }
	];
	public loginForm: FormGroup;
	
	constructor(private router: Router, 
				private sessionService: SessionService, 
				private bsModalService: BsModalService) {
		this.hideDropdownClick();
	}

	ngOnInit() {
		this.loginForm = new FormGroup({
			username: new FormControl(),
			password: new FormControl()
		});
	}

	private hideDropdownClick(): void {
		// $("html").click(() => {
		// 	for (var i = 0; i < this.bars.length; i++) {
		// 		this.bars[i].active = false;
		// 	}
		// });
	}

	public goToPage(page: string, config = {}) {
		this.router.navigate([page], config);
	}

	public loginUser(): void {
		this.sessionService.loginUser(this.loginForm.value).subscribe((data) => {
			if (data.success) {
				this.user = data.success;
				this.modalRef.hide();
				this.goToPage("/resources")
			}
		});
	}

	public triggerSlideToggle(): void {
		// $("nav ul").slideToggle();
	}

	public openLoginModal(login: TemplateRef<any>): void {
		this.modalRef = this.bsModalService.show(login);
	}

	public logoutSession(): void {
		this.sessionService.clearSessionState();
		this.goToPage("");
	}

	public closeLoginModal(): void {
		this.modalRef.hide();
	}

}