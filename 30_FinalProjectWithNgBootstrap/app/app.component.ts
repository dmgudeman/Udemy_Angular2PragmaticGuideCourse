import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
   
   <navbar></navbar>
  
     
      <button (click)= "onClick()">Click Me</button>
       <router-outlet></router-outlet>
      `
})
export class AppComponent  { 
  name = 'Angular'; 
  
  constructor(private _router: Router){
  }
  
  onClick(){
    this._router.navigate(['users', 2]);
  }

}
