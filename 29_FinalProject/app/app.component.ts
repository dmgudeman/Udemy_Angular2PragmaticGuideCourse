import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NavBarComponent } from './navbar.component';


@Component({
  selector: 'my-app',
  template: `
  <navbar></navbar>
       <ul>
    <li><a routerLink=" ">home</a></li>
    <li><a routerLink="users">Users</a></li>
    <li><a routerLink="posts">Posts</a></li>
    
    <!-- since route has a parameter need property binding syntax 
          this does accept a string, but a parameter array
    <li><a [routerLink]="['photos', 1]">Photos</a></li>-->
  </ul>
      <router-outlet></router-outlet>
      `
})
export class AppComponent  { 
  name = 'Angular';
constructor (private _router: Router) {} }
