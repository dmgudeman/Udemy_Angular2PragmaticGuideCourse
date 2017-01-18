import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Angular Router</h1>
  <nav>
   <!-- <a routerLink="/albumsr" routerLinkActive="active">Albums</a>
    <a routerLink="/contact" routerLinkActive="active">Contact</a>
    -->
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent  { name = 'Angular'; }
