import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger';

@Component({
    selector: 'passenger-viwer',
    template: `
    <section>
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
    constructor(private passengerService: PassengerDashboardService) {

    }
    ngOnInit() {
        this.passengerService.getPassenger(222667).subscribe((data: Passenger) => {
            this.passenger = data;
        })

    }
    onUpdatePassenger(event: Passenger) {
        this.passengerService
            .updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passenger = Object.assign({}, this.passenger, event);
            });
    }
} 