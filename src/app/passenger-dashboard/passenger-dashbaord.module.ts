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
import { PassengerDashboardRoutingModule } from './passenger-dashboard-routing.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'passengers',
      children: [
       { path: '', component: PassengerDashboardComponent },
       { path: ':id', component: PassengerViewerComponent }
      ]
    }
  ];


@NgModule({
    imports:[ 
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations:[ 
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent,
        PassengerFormComponent],

    providers:[ PassengerDashboardService ],

    exports:[]
    
})

export class PassengerDashboardModule{

}