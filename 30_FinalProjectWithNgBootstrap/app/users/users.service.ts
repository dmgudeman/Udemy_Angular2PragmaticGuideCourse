import { Injectable } from '@angular/core';
import { USERS } from './mock-users';

@Injectable()
export class UsersService {


   constructor() { }
   getUsers(): Promise<string[]> {
      return Promise.resolve(USERS);

   };

   //this.users = http://jsonplaceholder.typicode.com/users

}