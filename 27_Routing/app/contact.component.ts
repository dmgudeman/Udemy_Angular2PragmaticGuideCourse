import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent {
    onSubmit(form:any){
        console.log(form);
    }
}