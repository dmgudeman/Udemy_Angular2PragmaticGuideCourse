import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/from';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";

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
           <br>
           <button (click)="calcDates()">Get Dates</button>
      </form>

  `

})
export class Forms2Component {
  name:string = '23b. Observables Exercise - Reactive Forms';
 
  signupForm: FormGroup;

   constructor(@Inject(FormBuilder)fb: FormBuilder){
   
      this.signupForm = fb.group({
        search:['', <any>Validators.required],
        b_search: ['hi', <any>Validators.required]
      })
   const stream$= this.signupForm.valueChanges;
         
        stream$
        .debounceTime(400)
   .subscribe(x=>console.log(x))
   }
   onSubmit(value: string): void {
      console.log('you submitted value: ', value);
      
   }

   calcDates (){
  var observable = Observable.from([1,2,3]);
  var startDates=[];
  var startDate = new Date();
  for (var day= -2; day <=2; day++){
     var date = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDay() + day

     );
     startDates.push(date);
     Observable
        .from(startDates)
        .map(date=> {
           console.log("Getting deals for date " + date );
        return [1,2,3];})
        .subscribe(x => console.log(x))
  }
   }


}