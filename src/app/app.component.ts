import {Component} from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <nav class="nav">
        <a
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: item.exact}"
          >{{ item.name }}</a
        >
        <router-outlet></router-outlet>
      </nav>
    </div>
  `
})
export class AppComponent {
  title: string;
  message: string;
  name: string;
  color: string;

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/error',
      name: 'error 404',
      exact: false
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: false
    }
  ];

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
