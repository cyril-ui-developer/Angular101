import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger';

@Component({
    selector: 'passenger-detail',
    template: `
    <span class="status"
    [ngClass]='{"checked-in": detail.checkedIn }'></span>
     {{ i }} :
     {{ detail.name }}
     <div class="date">Checked In Date : {{ detail.checkedInDate ? (detail.checkedInDate | date:"fullDate" | uppercase ) : "Not checked in" }}</div>
     <div class="children">No of Children: {{ detail.children?.length > 0 ?  detail.children?.length : 0 }} </div>

    `,
    styleUrls:['./passenger-detail.components.scss']
})

export class PassengerDetailComponent {
    @Input()
    detail: Passenger;

}