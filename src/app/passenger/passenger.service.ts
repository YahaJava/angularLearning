import {Passenger} from './models/passenger.interface';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const PASSENGER_API = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerService {
  constructor(private http: Http) {}
  getPassengers() {
    return this.http
      .get(PASSENGER_API)
      .pipe(map((response: any) => response.json()));
  }
  updatePassenger(passenger: Passenger) {
    return this.http
      .get(`${PASSENGER_API}/${passenger.id}`)
      .pipe(map((response: any) => response.json()));
  }

  removePassenger(passenger: Passenger) {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .pipe(map((response: any) => response.json()));
  }

  getPassenger(id: number) {
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .pipe(map((response: any) => response.json()));
  }
}
