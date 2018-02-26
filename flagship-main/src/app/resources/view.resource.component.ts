import {Component} from "@angular/core";
import {ResourceService} from "../services/resource/resource.service";
import {CategoryService} from "../services/category/category.service";
import {Router, ActivatedRoute} from "@angular/router";
import {IArticle} from "../services/configuration/config";


@Component({
	templateUrl: "./view.resource.component.html",
	selector: "view-resource"
})

export class ViewResourceComponent {

	public resource: IArticle;
	public content;
	public categories = [];

	constructor(private resourceService: ResourceService,
				private activatedRoute: ActivatedRoute) {
	}

	ngOnInit() {
		const id = this.activatedRoute.snapshot.params.id;
		this.resourceService.getResource(id).subscribe((data: IArticle) => {
			this.resource = data;
		});
	}

	public getResourceBody(): string {
		return !!this.resource ? this.resource.body : "";
	}

}