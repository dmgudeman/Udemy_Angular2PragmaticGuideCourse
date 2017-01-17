import { Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
//http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/
@Component({
  selector: 'forms2',
  template: `
    <h2>{{name}}</h2>
    <form #f="ngForm"
          (ngSubmit)="onSubmit(f.value)">
        <label for="forms1">forms1</label>
        <input 
           type="text" 
           id="forms1"
           name="sku"
           ngModel
          >
        <button 
           type="submit">Submit </button>
      </form>
<!--
NgForm does something handy but non-obvious: it includes the form tag in its selector (instead of requiring you to explicitly add ngForm as an attribute). What this means is that if you import FormsModule, NgForm will get automatically attached to any <form> tags you have in your view. This is really useful but potentially confusing because it happens behind the scenes.

There are two important pieces of functionality that NgForm gives us:

    A FormGroup named ngForm
    A (ngSubmit) output

You can see that we use both of these in the <form> tag in our view:
    <form #f="ngForm"  
          (ngSubmit)="onSubmit(f.value)"

================================================================================================
NgModel creates a new FormControl that is automatically added to the parent FormGroup (in this case, on the form) and then binds a DOM element to that new FormControl. That is, it sets up an association between the input tag in our view and the FormControl and the association is matched by a name, in this case "sku".

The NgModel directive specifies a selector of ngModel. This means we can attach it to our input tag by adding this sort of attribute: ngModel="whatever". In this case, we specify ngModel with no attribute value.

There are a couple of different ways to specify ngModel in your templates and this is the first. When we us ngModel with no attribute value we are specifying:

   1. a one-way data binding
   2. we want to create a FormControl on this form with the name sku (because of the name attribute on the input tag)
================================================================================================
ngModel, comes from the selector of the directive and it's only used in the DOM / template.

It's also worth pointing out that NgModel and FormControl are separate objects. NgModel is the directive that you use in your view, whereas FormControl is the object used for representing the data and validations in your form. 
-->
  `

})
export class Forms2Component {
  name:string = '23. Observables Exercise - Reactive Forms';
  onSubmit(form: any): void {  
    console.log('you submitted value:', form);  
  }

}