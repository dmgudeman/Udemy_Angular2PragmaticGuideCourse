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
//    getUser(id:number){
//         console.log("Im in the service, the id = " + id);
//         return this.http.get(this.usersUrl)
//                    .map(res => res.json())
//                    .filter(user=>user.id == id)
//     }

}