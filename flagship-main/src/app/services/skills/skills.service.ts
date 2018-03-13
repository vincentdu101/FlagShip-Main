import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../category/category.service";
import {Config, ISkill} from "../configuration/config";
import {Observable} from "rxjs";

@Injectable() 
export class SkillsService {

	constructor(private http: HttpClient,
				private categoryService: CategoryService,
				private config: Config) {

	}

	public getSkills(): Observable<any> {
		return this.http.get(this.config.serverSkillsPath);
	}

	public getSkill(id: string): Observable<any>{
		return this.http.get(this.config.serverSkillsPath + "/" + id);
	}

	public createSkill(skill): Observable<any> {
		return this.http.post(this.config.serverSkillsPath, skill);
	}

	public saveSkill(skill): Observable<any> {
		return this.http.put(this.config.serverSkillsPath + "/" + skill._id, skill);
	}

	public deleteSkill(id: string): Observable<any> {
		return this.http.delete(this.config.serverSkillsPath + "/" + id);
	}

}