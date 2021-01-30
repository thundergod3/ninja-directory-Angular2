import { Component } from "@angular/core";
// import {ROUTER_DIRECTIVES} from "@angular/router"

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	// directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
	title = "app works!";
	ninja = {
		name: "Cong",
		belt: "Black",
	};

	yell = (e) => {
		alert("I am yelling");
		console.log(e);
	};
}
