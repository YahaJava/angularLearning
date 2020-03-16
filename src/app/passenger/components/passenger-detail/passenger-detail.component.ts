import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss'],
})
export class PassengerDetailComponent implements OnInit, OnChanges {
  @Input()
  detail: Passenger;
  editing = false;
  @Output()
  edit: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  remove: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  view: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onNameChange(name: string) {
    this.detail.name = name;
  }
  toggleEdit() {
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }

  onEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log('change');
  }

  goToPassenger() {
    this.view.emit(this.detail);
  }
}
