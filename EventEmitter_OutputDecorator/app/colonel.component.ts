import { Component } from '@angular/core';
import { KingComponent } from './king.component';

@Component ({
    selector: 'colonel',
    templateUrl: 'app/colonel.component.html'

})

export class ColonelComponent {
    order:string ="Just Wait"
  acceptKingsOrders(message:string){
       this.order= message;
  }
}