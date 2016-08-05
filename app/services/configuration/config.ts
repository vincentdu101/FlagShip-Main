import {Injectable} from "@angular/core";

@Injectable() 
export class Config {

	public get imagePath() {
		return "/app/images/";
	}

}