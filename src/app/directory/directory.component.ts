import { Component, OnInit } from "@angular/core";
import { DataService } from "app/data.service";
import { LoggingService } from "app/logging.service";

@Component({
	selector: "app-directory",
	templateUrl: "./directory.component.html",
	styleUrls: ["./directory.component.scss"],
})
export class DirectoryComponent implements OnInit {
	classes = { blue: true, red: false, underline: false };
	test = true;
	ninjas = [];
	term = "";

	constructor(private logger: LoggingService, private dataService: DataService) {}

	logIt = () => {
		this.logger.log();
	};

	ngOnInit() {
		this.dataService.fetchData().subscribe((data) => (this.ninjas = data));
	}
}
