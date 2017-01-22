import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usersRouting } from './users.routing';


@Component({
   selector: 'users',
   template: `
      <h4>Users Details {{ id }}</h4>
      <button (click)= "onClick()">Click Me</button>
   `
})

export class UserDetailsComponent implements OnInit, OnDestroy {
   id: any;
   subscription: any;
   constructor(
      private _route: ActivatedRoute, 
      private _router: Router) {

   }
   ngOnInit() {
      this.subscription = this._route.params.subscribe(params => {
         this.id = +params["id"];
      });
   }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }
    
  onClick(){
    this._router.navigate(['users', 2]);
  }
}



