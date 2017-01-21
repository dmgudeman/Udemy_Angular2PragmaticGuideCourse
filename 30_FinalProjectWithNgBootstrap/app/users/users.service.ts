import { Injectable } from '@angular/core';
import { USERS } from './mock-users';

@Injectable()
export class UsersService {


   constructor() { }
   getUsers(): Promise<string[]> {
      return Promise.resolve(USERS);

   };
   getUsersSlowly(): Promise<string[]> {
      return new Promise(resolve => {
         setTimeout(() => (this.getUsers()), 2000);
      });

      //this.users = http://jsonplaceholder.typicode.com/users

   }
}