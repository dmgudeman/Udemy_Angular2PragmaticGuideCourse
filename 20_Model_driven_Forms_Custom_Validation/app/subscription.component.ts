import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component ({
    selector: 'subscription',
    templateUrl: 'app/subscription.component.html'
})

export class SubscriptionComponent {
 frequencies = [
        { id: 1, label: 'Daily' }, 
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];
    
    onSubscribe(){
       
}
}