import {Injectable} from "@angular/core";

@Injectable() 
export class Config {

	public get imagePath() {
		return "/app/images/";
	}

	public get serverArticlesPath() {
		return "http://localhost:8080/articles?category_id=";
	}

}

export interface IUserToken {
	auth: boolean;
	token: string;
}

export interface IArticle {
	_id: string,
	name: string;
	description: string;
	body: string;
	image: string;
	__v: number;
	category_id: string;
	created_at: Date;
}