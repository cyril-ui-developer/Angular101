import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';


import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger';
import { Observable } from 'rxjs';


@Component({
    selector: 'passenger-viwer',
    template: `
    <section>
      <button (click)="goBack()">
        &lsaquo; Go back
      </button>
      <passenger-form 
      [detail]="passenger"
      (update)="onUpdatePassenger($event)"
      >
      </passenger-form>
    </section>
    `,
    styleUrls: ['./passenger-viewer.component.scss']
})

export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;
    constructor(
        private passengerService: PassengerDashboardService,
        private router: Router,
        private route: ActivatedRoute) {

    }
    selectedProject: Observable<any>;
    ngOnInit() {
        this.route.params.pipe(
            switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
        )
            .subscribe((data: Passenger) => this.passenger = data);
    }


    onUpdatePassenger(event: Passenger) {
        this.passengerService
            .updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passenger = Object.assign({}, this.passenger, event);
            });
    }


    goBack() {
        this.router.navigate(['/passengers']);
    }
} 