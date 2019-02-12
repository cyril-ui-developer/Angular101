import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDashboardService } from './passenger-dashboard.service';



@NgModule({
    imports:[ 
        CommonModule,
        HttpClientModule
    ],
    declarations:[ 
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent ],

    providers:[ PassengerDashboardService ],

    exports:[PassengerDashboardComponent ]
    
})

export class PassengerDashboardModule{

}