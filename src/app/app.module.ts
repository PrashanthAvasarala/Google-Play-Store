import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NguCarouselModule } from "@ngu/carousel";
import { NewReleaseComponent } from "./app.component.newRelease";
import { NewCarouselComponent } from "./app.component.carousel";

@NgModule({
  declarations: [AppComponent,
                 NewReleaseComponent,
                 NewCarouselComponent],
  imports: [BrowserModule, FormsModule, NguCarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
