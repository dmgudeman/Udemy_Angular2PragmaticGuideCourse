import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './users.service';


@Component({
selector: 'users',
   template: `
      <h4>Users</h4>
      <ul>
         <li *ngFor="let user of users">{{user}}</li>
      </ul>
   ` 
})

export class UsersComponent {
   users:string[];

   constructor(private usersService: UsersService){

   }
   ngOnInit(): void {
      this.getUsers();
   }
   getUsers(): void {
      this.users = this.usersService.getUsers();
   }
   }
   
   

