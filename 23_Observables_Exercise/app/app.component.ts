import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { Forms1Component } from './forms1example.component';
import { FBComponent } from './formbuilderexample.component';

@Component({
  selector: 'my-app',
  template: `
   <forms1></forms1>
    <fb1></fb1>
  `,
})
export class AppComponent {

}
