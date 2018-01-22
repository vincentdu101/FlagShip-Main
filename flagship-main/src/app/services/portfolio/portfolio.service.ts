import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../category/category.service";
import {Observable} from "rxjs";

@Injectable()
export class PortfolioService {

	constructor(private http: HttpClient,
				private categoryService: CategoryService) {
	}

	public getPortfolio() {
		var slideCategory = this.categoryService.findCategoryByName("Portfolio");
		if (!!slideCategory) {
			return this.http.get("http://localhost:8080/articles?category_id=" + slideCategory._id);
		} else {
			return Observable.empty<any>();
		}
	}

	public parsePortfolio(portfolio: Array<any>) {
		return portfolio.map((data) => {
			return data.name;
		});
	}

}