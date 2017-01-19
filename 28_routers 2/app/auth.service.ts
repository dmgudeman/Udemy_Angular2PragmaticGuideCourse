import { Injectable } from '@angular/core';

@Injectable() 
export class AuthService {
   isLoggedIn = true;

   // methods from login form. In log in call a service and get a value from the server
   // for login status
   login(username, password) {
      
   }

   // this one you do not call the server. Logged out state is the responsibility of 
   // the client so it is in Angulars realm.
   logout() {
      this.isLoggedIn = true;
   }


}