import {Injectable} from "@angular/core";

@Injectable() 
export class Config {

	public get imagePath() {
		return "/app/images/";
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