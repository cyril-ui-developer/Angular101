import { Component, OnInit } from '@angular/core';


import { Passenger } from '../../models/passenger';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.scss'],
  template: `
    <section>
    <passenger-count [passengerList]="passengers"></passenger-count>
    <passenger-detail 
     *ngFor="let passenger of passengers;"
     [detail]="passenger">
     </passenger-detail>
  
   
    </section>
    `
})

export class PassengerDashboardComponent implements OnInit {
  
  passengers: Passenger[] = [];

  constructor(){}


  ngOnInit(){
  this.passengers = [
    {
      "id": 167890,
      "name": "Efosa",
      "checkedIn": true,
      "checkedInDate": 1549912460745,
      "children": [{ name: "Obi", age: 3 }]
    },
    {
      "id": 222667,
      "name": "Ehimen",
      "checkedIn": false,
      "checkedInDate": 1549912444287,
      children: null
    },
    {
      "id": 212343,
      "name": "Isoken",
      "checkedIn": true,
      "children": [{ name: "Osas", age: 12 }, { name: "Amen", age: 8 }]
    }
  ]

  }
}