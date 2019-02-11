import { Component } from '@angular/core';

import { Passenger } from './passenger';

@Component({
  selector: 'app-root',
  template: `
   <main>
   <section>
   <header>
   <h2>RailLine Passengers</h2>
   </header>
   <ul>
    <li *ngFor="let passenger of passengers">
    {{passenger.name}}
    </li>
   </ul>
   </section>
   </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  passengers: Passenger[] = [
    {
      "id": 167890,
      "name": "Efosa",
      "checkIn": true
    },
    {
      "id": 222667,
      "name": "Ehimen",
      "checkIn": false
    },
    {
      "id": 212343,
      "name": "Isoken",
      "checkIn": true
    }
  ]
}
