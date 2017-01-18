import { Component } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';

@Component ({
    selector:'contact-form',
    templateUrl: 'app/contact-form.component.html'
    
})
export class ContactFormComponent {
    log(x) {
        console.log(x)
    }
    onSubmit(form){
        console.log(form);
    }
}