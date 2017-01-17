import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubscriptionComponent } from './subscription.component';
import { UsernameValidators } from './usernameValidators';

// 2016-01-16 left off here in order to continue it would be best to do Hero
// tutorial start to finish.


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [`
     .input-line {
        padding: 5px;
        width: 400px;
      }
  `]
})
export class AppComponent  { 
Component class

  // The component class is now responsible for defining and managing the form control model.

  // Angular no longer derives the control model from the template so we can no longer query for it. We create the Angular form control model explicitly with the help of the FormBuilder.
  title = '20. Module-driven Forms with Custom Validation'; 
  form: FormGroup;

  constructor(fb: FormBuilder){
      this.form = fb.group({
        username: ['', Validators.compose([
          Validators.required,
          UsernameValidators.cannotContainSpace
          ]
          )],
        password: ['', Validators.required]
      });
  }

signup(){
  console.log(this.form.value);
}

}
