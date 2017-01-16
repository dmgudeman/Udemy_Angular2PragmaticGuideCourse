import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html'
})

export class ContactFormComponent {
    title: string = '';

    // this is the method that subscribes to the EventEmitter object that was sent from the child.
    onNotify(message: string) {

        // this updates the parents template with interpolation
        this.title = message;
        console.log(message);

        console.log("Handled by Button");

    }
}
