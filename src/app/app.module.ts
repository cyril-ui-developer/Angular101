import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashbaord.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Angular Modules
    BrowserModule,
    AppRoutingModule,

    //Custom modules
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
