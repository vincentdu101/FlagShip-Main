import { Component } from '@angular/core';
import {CategoryService} from "./services/category/category.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	constructor(private categoryService: CategoryService) {
		this.categoryService.loadAllCategories();
	}

}
