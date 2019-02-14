import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';



@NgModule({
    imports:[ 
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    declarations:[ 
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent,
        PassengerFormComponent],

    providers:[ PassengerDashboardService ],

    exports:[
        PassengerViewerComponent ]
    
})

export class PassengerDashboardModule{

}