import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dropdown',
    template: `
   <div>
        <h2>DropDown: {{ dropdownTitle}} </h2>
 
             <!-- two way binding on the input box -->
        <input type="text" [(ngModel)]="dropdownTitle"/>

            <!-- two different ways of making buttons -->
        <button (click)="onClick($event)">Clear Dropdown 1</button>
        <input type="submit" (click)="onClick($event)" value="Clear Dropdown 2"/>

            <!-- display the dropdownTitle in this template, one way binding -->
        Preview DropDown: {{ dropdownTitle }}
    </div> 
  `
})
export class DropdownComponent {

    // initialize a local variable
    dropdownTitle: string = "Starting dropdownTitle";
    // the EventEmitter publishes an event object in this case it is a string. You must use the 
    // Output decorator or the outside world cannot see it.
    @Output() dropdownEmmitter = new EventEmitter<string>();

    // this has been bound to the change event in the DOM, so when anything changes it is updated 
    onClick($event: Event) {
        console.log(this.dropdownTitle);

        // the $event object carries whatever payload the EventEmmitter is set up to emit
        // In this case it is a string. This is emitted so the contact-form can subscribe
        this.dropdownEmmitter.emit(this.dropdownTitle);

        // clears the input box
        this.dropdownTitle = "";

        console.log("ONNNNN CLICKED");
    }
/* 
   Moving data from child to parent takes four things:

   1.  In the child.component.ts
       Decorate a new EventEmitter in the child with the Output decorator. Make a method using EventEmitter's
       emit property to emit an event object to the parent component. The Output decorator makes a hole in the encapsulation
       for the $event payload. 
       
       The emitter is a spy. The method instructs what payload (bomb) to emit and the 
       Output decorator makes sure there is a hole (unlocked door) to let it out of your embattlements. 

    2. In the child.component.html
        Capture a DOM event (click, change, input eg) inside of parentheses in DOM element (HTML tag) and
        bind it to the method in the child.component.ts that emits the payload. 
        
        The DOM event is the order
        from the king to start the mission and binding it to the method means you give the the order to leave
        the castle.

    3. In the parent.component.html
        In the custom directive tag (Inside the child HTML tag used to place the child template into the parent) 
        surround the exact name of the EventEmitter from the child and bind it ( use '=' sign ) to a method in the 
        parent.component.ts This method should have the $event object as an argument because it is carrying the payload.
        This method manipulates the payload within the parent.component.html.

        The spy goes to the embassy in the opponents castle. The embassy is the eventEmitter Instance surrounded 
        in parentheses. The spy has instructions what to do with the payload ($event) to an operative within the 
        foreign castle (method in parent.component.ts).

    4. In the parent.component.ts
        Define the method used in the parent template, collecting $event as a parameter and using it within the 
        parent template, such as a string interpolated into the parent template. The leader in the enemy castle
        writes instructions about what to collect from the spy and how to use it (method in the parent.component.ts)

*/

}

