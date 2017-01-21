import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './users.service';


@Component({
   selector: 'users',
   templateUrl: 'app/users/users.component.html',
   styles: [`
      .myTable {
         margin: 20px;
         width: 50%;
      }
   `]
})

export class UsersComponent {
   users: any;

   constructor(private usersService: UsersService) {

   }
   ngOnInit(): void {
      this.getUsers();
   }
   getUsers(): void {
      this.usersService.getUsers().then(users => this.users = users);
   }
  

   
   }



