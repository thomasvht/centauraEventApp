import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './modules/login/containers/login.component';
import { EventsOverviewComponent } from './modules/events/containers/events-overview/events-overview.component';


const routes: Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full' },
  {path: 'overview', component: EventsOverviewComponent},
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
