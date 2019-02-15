import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { NotFoundComponent } from '../not-found.component';

const routes: Routes = [
    {
      path: 'passengers',
      children: [
       { path: '', component: PassengerDashboardComponent },
       { path: ':id', component: PassengerViewerComponent },
      // { path:'**', component:NotFoundComponent }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengerDashboardRoutingModule { }
