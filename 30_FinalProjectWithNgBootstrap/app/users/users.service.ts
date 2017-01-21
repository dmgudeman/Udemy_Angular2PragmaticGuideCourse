import { Injectable } from '@angular/core';
import { USERS } from './mock-users';

@Injectable()
export class UsersService{


constructor(){}
getUsers(): string[] {
   return USERS;
};

//this.users = http://jsonplaceholder.typicode.com/users

}