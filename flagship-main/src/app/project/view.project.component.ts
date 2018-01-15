import {Component} from "@angular/core";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
	templateUrl: "./view.project.component.html",
	selector: "view-project"
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