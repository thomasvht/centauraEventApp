import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsOverviewComponent } from './modules/events/containers/events-overview/events-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsOverviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
