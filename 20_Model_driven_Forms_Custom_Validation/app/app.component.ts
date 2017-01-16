import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubscriptionComponent } from './subscription.component';
import { UsernameValidators } from './usernameValidators';




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
  title = '20. Module-driven Forms with Custom Validation'; 
  form: FormGroup;

  constructor(fb: FormBuilder){
      this.form = fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

signup(){
  console.log(this.form.value);
}

}
