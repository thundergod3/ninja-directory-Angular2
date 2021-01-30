import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	myString = "Test string";
	myBoolean = false;
	@Input() ninja: any;
	@Output() onYell = new EventEmitter();

	alertMe = () => {
		alert("Hey there");
	};

	fireYellEvent = (e) => {
		this.onYell.emit(e);
	};

	constructor() {}

	ngOnInit() {}
}
