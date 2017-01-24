import {Component} from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
   selector: 'home',
   template: `
      <h4>Home</h4>
   ` 

})

export class HomeComponent {
   constructor(authService: AuthService){
      authService.login("username", "password");
   }
}