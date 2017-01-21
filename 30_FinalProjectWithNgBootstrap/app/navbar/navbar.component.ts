import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'navbar',
   templateUrl: 'app/navbar/navbar.component.html',
   styles: [`
      .tab-background {
         background-color: red;

      }
   `]
})
export class NavbarComponent implements OnInit{
   constructor(){

   }

   ngOnInit() {

   }
}