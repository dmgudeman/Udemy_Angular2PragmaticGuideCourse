import { Component, OnInit } from '@angular/core';
import { Http,} from '@angular/http';
import 'rxjs/add/operator/map'
import { UsersExperimentalService } from './users-experimental.service';


@Component({
      selector: 'users-experimental',
      //viewProviders: [HTTP_PROVIDERS],
      template: `
      <h4>Users Experimental </h4>
         <ul>
         <li> *ngFor="let user of users> {{"hi there" + users.name}}</li>
         </ul>
      `
})
export class UsersExperimentalComponent implements OnInit {
      errorMessage: string;
      users: any;
      mode = 'Observable';
      constructor(private usersExperimentalService: UsersExperimentalService) { }

      ngOnInit() {
            this.getUsers(); {
            }
      }

      getUsers(){
            this.usersExperimentalService.getUsers()
                  .subscribe(
                      users =>this.users = users,
                      error => this.errorMessage = <any>error
                  );
      }
}