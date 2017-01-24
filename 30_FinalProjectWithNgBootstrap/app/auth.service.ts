
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
   isLoggedIn = false;

// In real app this is provided by the server
   login(){
       this.isLoggedIn = false;
   }

   // This is managed by the client that is to say Angular
   logout(){
       this.isLoggedIn = false;
   }
}