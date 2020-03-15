import {Component, Input, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {
  @Input()
  detail: Passenger;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleCheck(event: any) {
    if (this.detail.checked) {
      this.detail.checkedInDate = Date.now();
    }
    this.detail.checked = !this.detail.checked;
  }
}
