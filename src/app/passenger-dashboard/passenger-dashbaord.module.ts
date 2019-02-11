import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';


@NgModule({
    imports:[ CommonModule ],
    declarations:[ PassengerDashboardComponent ],
    providers:[],
    exports:[PassengerDashboardComponent ]
    
})

export class PassengerDashboardModule{

}