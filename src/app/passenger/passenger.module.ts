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
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'passengers',
    children: [
      {path: '', component: PassengerComponent},
      {path: ':id', component: PassengerViewerComponent}
    ]
  }
];

@NgModule({
  declarations: [
    PassengerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent,
  ],
  imports: [CommonModule, FormsModule, HttpModule, RouterModule.forChild(routes)],
  providers: [PassengerService],
})
export class PassengerModule {}
