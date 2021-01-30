import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { APP_ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DirectoryComponent } from "./directory/directory.component";
import { FilterPipe } from "./filter.pipe";
import { LoggingService } from "./logging.service";
import { DataService } from "./data.service";

@NgModule({
	declarations: [AppComponent, HomeComponent, DirectoryComponent, FilterPipe],
	providers: [LoggingService, DataService],
	bootstrap: [AppComponent],
	imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(APP_ROUTES)],
	exports: [RouterModule],
})
export class AppModule {}
