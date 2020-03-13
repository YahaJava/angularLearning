import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PassengerModule} from './passenger/passenger.module';


@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, PassengerModule],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
})
export class AppModule {}
