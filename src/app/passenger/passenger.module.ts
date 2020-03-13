import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PassengerComponent} from './components/passenger/passenger.component';
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';
import {FormsModule} from '@angular/forms';
import {PassengerService} from './passenger.service';
import {HttpModule} from '@angular/http';
import { PassengerViewerComponent } from './components/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

@NgModule({
  declarations: [
    PassengerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent,
  ],
  imports: [CommonModule, FormsModule, HttpModule],
  exports: [PassengerComponent, PassengerViewerComponent, PassengerFormComponent],
  providers: [PassengerService],
})
export class PassengerModule {}
