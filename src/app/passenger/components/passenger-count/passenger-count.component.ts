import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.css'],
})
export class PassengerCountComponent implements OnInit {
  @Input()
  items: Passenger[];

  getChecked(): number {
    if (!this.items) { return ; }
    return this.items.filter((passenger: Passenger) => passenger.checked)
      .length;
  }

  constructor() {}

  ngOnInit(): void {}
}
