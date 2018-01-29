import {Component, TemplateRef, OnInit} from "@angular/core";
import {SessionService} from "../services/configuration/session.service";
import {BsModalService} from "ngx-bootstrap/modal";
import {BsModalRef} from "ngx-bootstrap/modal/bs-modal-ref.service";
import {FormGroup, FormControl} from "@angular/forms";
import {OtherService} from "../services/configuration/other.service";

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
	
	constructor(private sessionService: SessionService, 
				private bsModalService: BsModalService,
				private otherService: OtherService) {
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

	public loginUser(): void {
		this.sessionService.loginUser(this.loginForm.value).subscribe((data) => {
			if (data.success) {
				this.user = data.success;
				this.modalRef.hide();
				this.otherService.goToPage("/resources")
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
		this.otherService.goToPage("");
	}

	public closeLoginModal(): void {
		this.modalRef.hide();
	}

	public checkLoginStatus(): boolean {
		return this.sessionService.isLoggedIn();
	}

}