import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger';

@Component({
    selector: 'passenger-detail',
    templateUrl:'passenger-detail.component.html',
    styleUrls: ['./passenger-detail.component.scss']
})

export class PassengerDetailComponent implements OnChanges {
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

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

    goToPassenger(){
        this.view.emit(this.detail)
    }
}