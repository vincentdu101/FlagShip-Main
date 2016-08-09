import {Component} from "@angular/core";
import {FORM_DIRECTIVES} from "@angular/common";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";
import {DROPDOWN_DIRECTIVES} from "ng2-bootstrap/components/dropdown";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
	templateUrl: "./app/project/view.project.component.html",
	selector: "view-project",
	directives: [FORM_DIRECTIVES, DROPDOWN_DIRECTIVES]
})

export class ViewProjectComponent {

	public project = { name: "", description: "", image: "", body: "", category: "Projects" };
	public content;
	public categories = [];

	constructor(private projectService: ProjectService,
				private router: Router,
				private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.projectService.getProject(params.id).subscribe(data => {
				this.project = data.json();
			});
		});
	}

}