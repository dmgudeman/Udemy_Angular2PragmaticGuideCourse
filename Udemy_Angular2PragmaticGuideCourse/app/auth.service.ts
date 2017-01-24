
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
   isLoggedIn:boolean;

   // In real app this is provided by the server
   login(username: string, password: string) {
      if(username=="D" && password=="s")
        return this.isLoggedIn = true;
      return this.isLoggedIn = false;
   }

   // This is managed by the client that is to say Angular
   logout() {
      this.isLoggedIn = false;
   }
}