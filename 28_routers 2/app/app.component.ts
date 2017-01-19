import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-app',
  template: `
  <!-- the routerLinks are assigned a path that was defined in app.routing.ts -->
  <ul>
    <li><a routerLink="">Home</a></li>
    <li><a routerLink="messages">Messages</a></li>
    <li><a routerLink="photos">Photos</a></li>
    
    <!-- since route has a parameter need property binding syntax 
          this does accept a string, but a parameter array-->
    <li><a [routerLink]="['photos', 1]">Photos</a></li>
  </ul>
  <router-outlet></router-outlet>
`
})
export class AppComponent {

  constructor (private _router: Router) {}

  onClick() {
    this._router.navigate(['photos', 2])
  }
}