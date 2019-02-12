import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger';

@Component({
    selector: 'passenger-detail',
    template: `
    <section>
    <span class="status"
    [ngClass]='{"checked-in": detail.checkedIn }'></span>
    <div *ngIf="editing">
      <input 
           type="text" 
           [value]="detail.name"
           (input)="onNameChange(name.value)"
           #name>
    </div>
     <div *ngIf="!editing">
     {{ detail.name }}
     </div>
     <div class="date">Checked In Date : {{ detail.checkedInDate ? (detail.checkedInDate | date:"fullDate" | uppercase ) : "Not checked in" }}</div>
     <div class="children">No of Children: {{ detail.children?.length > 0 ?  detail.children?.length : 0 }} </div>
      <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
      <button (click)="onRemove()">Remove</button>
     </section>
    `,
    styleUrls: ['./passenger-detail.components.scss']
})

export class PassengerDetailComponent implements OnChanges {
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;

    onNameChange(value: string) {
        this.detail.name = value;
    }
    toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }
    onRemove() {
        this.remove.emit(this.detail);
    }

    ngOnChanges(changes) {
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }
}