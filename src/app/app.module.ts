import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PassengerModule} from './passenger/passenger.module';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {ErrorComponent} from './error.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PassengerModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent, ErrorComponent]
})
export class AppModule {}
