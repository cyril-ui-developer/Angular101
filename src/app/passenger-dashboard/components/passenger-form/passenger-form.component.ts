import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger';

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
    <div *ngIf="form.value.checkedIn">
      Check in date:
      <input 
        type="number"
        name="checkInDate"
        [ngModel]="detail?.checkInDate">
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

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail.checkInDate = Date.now();
        }
    }

} 