import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {CategoryService} from "../category/category.service";

@Injectable()
export class PortfolioService {

	constructor(private http: Http,
				private categoryService: CategoryService) {
	}

	public getPortfolio() {
		var slideCategory = this.categoryService.findCategoryByName("Portfolio");
		return this.http.get("http://localhost:8080/articles?category_id=" + slideCategory._id);
	}

	public parsePortfolio(portfolio: Array<any>) {
		return portfolio.map((data) => {
			return data.name;
		});
	}

}