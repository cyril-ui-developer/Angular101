import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger';
import { Baggage } from '../../models/baggage';

@Component({
    selector: 'passenger-form',
    template: `
    <section>
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        Passenger name:
        <input
          type="text"
          name="name"
          [ngModel]="detail?.name">
      </div>
      <div>
        Passenger ID:
        <input
          type="number"
          name="id"
          [ngModel]="detail?.id">
      </div>
      <div>
      <label>
        <input 
          type="radio"
          [value]="true"
          name="checkedIn"
          [ngModel]="detail?.checkedIn"
          (ngModelChange)="toggleCheckIn($event)">
        Yes
      </label>
      <label>
        <input 
          type="radio"
          [value]="false"
          name="checkedIn"
          [ngModel]="detail?.checkedIn"
          (ngModelChange)="toggleCheckIn($event)">
        No
      </label>
    </div>
    <div>
    <label>
    <input 
      type="checkbox"
      name="checkedIn"
      [ngModel]="detail?.checkedIn"
      (ngModelChange)="toggleCheckIn($event)">
      Check In:
  </label>
</div>
    <div *ngIf="form.value.checkedIn">
      Check in date:
      <input 
        type="number"
        name="checkInDate"
        [ngModel]="detail?.checkInDate">
    </div>
  <div>
  Luggage - using selected
  <select 
        name="baggage"
        [ngModel]="detail?.baggage"
        
        >
    <option
         *ngFor="let bag of baggage"
         [value]="bag.key"
         [selected]="bag.key === detail?.baggage">
         {{ bag.value }}
    </option>
  </select>
  </div>
  <div>
  Luggage - using ngValue
  <select 
        name="baggage"
        [ngModel]="detail?.baggage"
        
        >
    <option
         *ngFor="let bag of baggage"
         [ngValue]="bag.key"
         >
         {{ bag.value }}
    </option>
  </select>
  
  
  </div>
      {{ form.value | json }}
    </form>
    </section>
    `,
    styleUrls: ['./passenger-form.component.scss']
})

export class PassengerFormComponent {

    @Input()
    detail: Passenger;

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    },
    {
        key: 'hand-only',
        value: 'Hand baggage'
    }, {
        key: 'hold-only',
        value: 'Hold baggage'
    },
    {
        key: 'hand-hold',
        value: 'Hand and hold baggage'
    }];

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail.checkInDate = Date.now();
        }
    }

} 