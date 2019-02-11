import { Component, OnInit } from '@angular/core';


import { Passenger } from '../../models/passenger';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.scss'],
  template: `
    <section>
    <header>
    <h2>RailLine Passengers</h2>
    </header>
    <ul>
     <li *ngFor="let passenger of passengers; let i = index;">
     <span class="status"
     [ngClass]='{"checked-in": passenger.checkedIn }'></span>
      {{ i }} :
      {{ passenger.name }}
      <div class="date">Checked In Date : {{ passenger.checkedInDate ? (passenger.checkedInDate | date:"fullDate" | uppercase ) : "Not checked in" }}</div>
      <div class="children">No of Children: {{ passenger.children?.length > 0 ?  passenger.children?.length : 0 }} </div>
      </li>
    </ul>
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