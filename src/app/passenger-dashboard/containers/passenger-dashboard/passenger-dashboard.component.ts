import { Component, OnInit } from '@angular/core';


import { Passenger } from '../../models/passenger';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.scss'],
  template: `
    <section>
    <passenger-count [passengerList]="passengers"></passenger-count>
    <div *ngFor="let passenger of passengers;">
    {{passenger.name}}
    </div>
    <passenger-detail 
     *ngFor="let passenger of passengers;"
     [detail]="passenger"
     (edit)="handleEdit($event)"
     (remove)="handleRemove($event)">
     </passenger-detail>
    </section>
    `
})

export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[] = [];

  constructor(private passengersService: PassengerDashboardService) { }


  ngOnInit() {
    this.passengersService.getPassengers().subscribe((data: Passenger[]) => {
      this.passengers = data;
    });
  }

  handleEdit(event: Passenger) {
    this.passengersService.updatePassenger(event).subscribe((data: Passenger) => {
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if (passenger.id === event.id) {
          passenger = Object.assign({}, passenger, event);
        }
        return passenger;
      });
    })

    console.log(this.passengers)
  }

  handleRemove(event: Passenger) {
    this.passengersService.removePassenger(event).subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) => {
        return passenger.id !== event.id;
      });
    })
  }


}