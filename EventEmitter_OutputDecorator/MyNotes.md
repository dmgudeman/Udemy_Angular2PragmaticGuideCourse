
ving data from child to parent takes four things:

   1.  In the child.component.ts
       Decorate a new EventEmitter in the child with the Output decorator. Make
a method using EventEmitter's
      emit property to emit an event object to the outside world.

    2. In the child.component.html
        Capture a DOM event (click, change, input eg) inside of parentheses in
DOM element (HTML tag) and
        bind it to the method in the component.ts that emits the payload.

    3. In the parent.component.html
        In the custom directive tag (Inside the child HTML tag used to place the
child template into the parent) 
        surround the exact name of the EventEmitter from the child and bind it
to a method in the parent.component.ts
        This method should have the $event object as an argument because it is
carrying the payload.

    4. In the parent.component.ts
        Define the method used in the parent template, collecting $event as a
parameter and using it within the 
        parent template, such as a string interpolated into the parent template.
