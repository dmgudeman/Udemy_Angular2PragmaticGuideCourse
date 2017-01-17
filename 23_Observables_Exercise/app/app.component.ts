import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { Forms1Component } from './forms1example.component';
import { Forms2Component } from './forms2Reactive.component';
import { FBComponent } from './formbuilderexample.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
   <forms1></forms1>
    <fb1></fb1>
    <forms2></forms2>
  `,
})
export class AppComponent {
title:string='23. Observables Exercise - using FormsModule';
}
