import { Component } from '@angular/core';
import { SubscriptionComponent } from './subscription.component';




@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
               <subscription></subscription>
            `
})
export class AppComponent  { name = 'Subscription Form'; }
