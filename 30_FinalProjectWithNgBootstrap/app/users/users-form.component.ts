import { Component, OnInit } from '@angular/core';
// import { Http, } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
// import { UsersExperimentalService } from './users-experimental.service';
//import { usersRouting } from './users.routing';

@Component({
   selector: 'users-form',
   templateUrl: 'app/users/users-form.component.html',
   styles: [`
     
   `]
})

export class UsersFormComponent {
   users: any;

    constructor(
       private _route: ActivatedRoute, 
      //  private usersExperimentalService: UsersExperimentalService,
       ) {}
   // ngOnInit(): void {
   //    this.getUsers();
   // }
   // getUsers(): void {
   //    this.usersService.getUsers().then(users => this.users = users);
   // }
  
}
   