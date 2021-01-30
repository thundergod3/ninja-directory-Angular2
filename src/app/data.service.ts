import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class DataService {
	constructor(private http: Http) {}

	fetchData() {
		return this.http.get("/ninjas.json").pipe(map((res) => JSON.parse(res["_body"])));
	}
}
