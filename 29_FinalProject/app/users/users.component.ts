
import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { HttpModule } from '@angular/http';


@Component({
  templateUrl: 'app/users/users.component.html'
})
export class UsersComponent {
users:any;
  
  
  constructor(private _service : UsersService) { }
     ngOnInit() {
       this._service.getUsers()
         .subscribe(users => this.users = users);
    
         
     }
    
}