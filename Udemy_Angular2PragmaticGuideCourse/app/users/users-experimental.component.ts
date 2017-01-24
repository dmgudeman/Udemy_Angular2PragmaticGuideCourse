import { Component, OnInit } from '@angular/core';
import { Http, } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import { UsersExperimentalService } from './users-experimental.service';

@Component({
      selector: 'users-experimental',
      templateUrl: 'app/users/users-experimental.component.html'
})
export class UsersExperimentalComponent implements OnInit {
      errorMessage: string;
      users: any[];
      listId: string;
      listName: string;
      mode = 'Observable';

      constructor(
            private _route: ActivatedRoute,
            private usersExperimentalService: UsersExperimentalService,
            private _router: Router) {
      }

      ngOnInit() {
            this.getUsers(); {
            }
      }

      getUsers() {
            this.usersExperimentalService.getUsers()
                  .subscribe(
                  users => this.users = users,
                  error => this.errorMessage = <any>error
                  );
      }
      onClick() {
            this._router.navigate(['users-form']);
      }
}

