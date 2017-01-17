import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
//http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/
@Component({
  selector: 'forms2',
  template: `
    <h2>{{name}}</h2>
    <form [formGroup] ="signupForm" novalidate>
        <label for="a">a</label>
        <input 
           type="text" 
           id="a"
           formControlName="search">
           <label for="b">b</label>
        <input 
           type="text" 
           id="b"
           formControlName="b_search">
      </form>

  `

})
export class Forms2Component {
  name:string = '23b. Observables Exercise - Reactive Forms';
  
  signupForm: FormGroup;

   constructor(@Inject(FormBuilder)fb: FormBuilder){
   
      this.signupForm = fb.group({
        search:['', Validators.required],
        b_search: ['', Validators.required]
      }) 
    this.signupForm.valueChanges
        .subscribe(x=>console.log(x.search, x.b_search))
   }
   onSubmit(value: string): void {
      console.log('you submitted value: ', value);
   }
  
  
  

}