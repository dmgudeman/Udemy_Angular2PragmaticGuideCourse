import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   
   <navbar></navbar>
  
      <ul>
        <li><a routerLink="">Home</a></li>
        <li><a routerLink="posts">Posts</a></li>
        <li><a routerLink="users">Users</a></li>
      </ul>
       <router-outlet></router-outlet>
      `,
})
export class AppComponent  { name = 'Angular'; }
