import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashbaord.module';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    //Angular Modules
    BrowserModule,
    AppRoutingModule,
    //Custom modules
    PassengerDashboardModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
