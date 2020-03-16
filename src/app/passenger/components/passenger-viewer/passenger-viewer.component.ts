import { Component, OnInit } from '@angular/core';
import {PassengerService} from '../../passenger.service';
import {Passenger} from '../../models/passenger.interface';
import {ActivatedRoute, Params, Router, Routes} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.css']
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(private passengerService: PassengerService,
              private router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((data: Params) => this.passengerService.getPassenger(data.id)))
    .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
   this.passengerService.updatePassenger(event).subscribe((data: Passenger) => {
     this.passenger = Object.assign({}, this.passenger, event);
   });
  }

  goBack() {
    this.router.navigate(['/passengers'])
  }
}
