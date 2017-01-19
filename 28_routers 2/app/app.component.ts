import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <!-- the routerLinks are assigned a path that was defined in app.routing.ts -->
  <ul>
    <li><a routerLink="">Home</a></li>
    <li><a routerLink="messages">Messages</a></li>
    <li><a routerLink="photos">Photos</a></li>
  </ul>
  <!-- needed to put this in despite saying it was unnecessary-->
  <router-outlet></router-outlet>
`
})
export class AppComponent {
}