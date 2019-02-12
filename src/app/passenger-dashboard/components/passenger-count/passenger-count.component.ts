import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger';

@Component({
    selector: 'passenger-count',
    template: `
    <header>
    <h3>RailLine Passengers</h3>
    </header>
    <div>Total checked-in: {{ checkedInCount() }} / {{ passengerList.length }} </div>
    `
})

export class PassengerCountComponent {
    @Input()
    passengerList: Passenger[];

    checkedInCount() {

        if (!this.passengerList) {
            return
        }
        return this.passengerList.filter((passenger: Passenger) => {
            return passenger.checkedIn;
        }).length;
    }

}