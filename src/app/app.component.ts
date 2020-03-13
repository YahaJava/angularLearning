import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <h1 [style.color]="color" [innerHTML]="title"></h1>
    <div>
      {{ message }}
    </div>
    <input type="text" [ngModel]="name" (ngModelChange)="change($event)" />
    <input type="text" [(ngModel)]="name" />
    <input type="submit" (blur)="focus()" (click)="click()" value="ok" /><br />
    <div *ngIf="name.length > 1">
      {{ name }}
    </div>
    <br /><br />
    <app-passenger></app-passenger>
  `,
})
export class AppComponent {
  title: string;
  message: string;
  name: string;
  color: string;

  constructor() {
    this.title = 'angular';
    this.message = 'learning';
    this.name = 'andy';
    this.color = 'red';
  }

  focus() {
    this.color = 'blue';
  }

  click() {
    this.message = 'clicked';
  }

  change(value: any) {
    this.name = value;
  }
}
