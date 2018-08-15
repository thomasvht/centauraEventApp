import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsOverviewComponent } from './modules/events/containers/events-overview/events-overview.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './modules/login/containers/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsOverviewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
