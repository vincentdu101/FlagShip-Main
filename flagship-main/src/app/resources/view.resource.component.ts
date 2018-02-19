import {Component} from "@angular/core";
import {ProjectService} from "../services/project/project.service";
import {CategoryService} from "../services/category/category.service";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
	templateUrl: "./view.resource.component.html",
	selector: "view-resource"
})

export class ViewResourceComponent {

	public resource = { name: "", description: "", image: "", body: "", category: "Projects" };
	public content;
	public categories = [];

	constructor(private projectService: ProjectService,
				private router: Router,
				private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.projectService.getProject(params.id).subscribe(data => {
				// this.resource = data.json();
			});
		});
	}

}