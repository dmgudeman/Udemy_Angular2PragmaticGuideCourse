import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
   selector: 'users',
   template: `
      <h4>Users Details {{ id }}</h4>
   `
})

export class UserDetailsComponent implements OnInit, OnDestroy {
   id: any;
   subscription: any;
   constructor(private _route: ActivatedRoute) {

   }
   ngOnInit() {
      this.subscription = this._route.params.subscribe(params => {
         this.id = +params["id"];
      });
   }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }
}



