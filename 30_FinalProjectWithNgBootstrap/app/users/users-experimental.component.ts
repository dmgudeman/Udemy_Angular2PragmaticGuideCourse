import { Component, OnInit } from '@angular/core';
import { Http,} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import { UsersExperimentalService } from './users-experimental.service';


@Component({
      selector: 'users-experimental',
      
      template: `
      <h4>Users Experimental </h4>
         
    <table class=" table table-bordered myTable">
   <thead>
      <tr>
         <th>User</th>
         <th>Email</th>
         <th>Edit</th>
         <th>Delete</th>
      </tr>
   </thead>

   <tbody>

      <tr *ngFor="let user of users">
      <td> {{user.name}}</td>
      <td> {{user.email}}</td>
      <td> <i class="glyphicon glyphicon-edit"></i></td>
      <td> <i class="glyphicon glyphicon-remove"></i></td>
      </tr>
   </tbody>


</table>

      `
})
export class UsersExperimentalComponent implements OnInit {
      errorMessage: string;
      users: any[];
      listId: string;
      listName: string;
      mode = 'Observable';
      
      constructor(private _route: ActivatedRoute, private usersExperimentalService: UsersExperimentalService) {     
       }

      ngOnInit() {
            this.getUsers(); {
            }
            console.log(this.users);
      }

      getUsers(){
            this.usersExperimentalService.getUsers()
                  .subscribe(
                      users =>this.users = users,
                      error => this.errorMessage = <any>error
                  );
      }
}

