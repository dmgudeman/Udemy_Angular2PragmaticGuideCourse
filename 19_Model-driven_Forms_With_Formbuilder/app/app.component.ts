// 1/15/2017 using this tutorial
// https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

import { User } from './user.interface';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [`
      form  {
        padding: 20px;
      }
      .input-line {
        padding: 5px;
        width: 400px;
      }
  `]
  
})
// NESTING LOGI FROM https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2
export class AppComponent { 
  title:string = '19. Sign-up Form'; 
  public myForm:FormGroup;   // the model driven form, implements FormGroup interface
  public submitted: boolean; // keep track of submission status
  public events: any[]=[];   // use later to display form changes

  constructor( private _fb: FormBuilder) {} // to simplify form initialization
                            // angular high-jacks the constructor, so only put 
                            // dependency injection here
  //  Short Syntax
    ngOnInit(){
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    }
    initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

    addAddress() {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }



  save (model:User, isValid: boolean) {
    this.submitted = true; // set form submit to true
     console.log("title = " + this.title)
    // check if model is valid 
    // if valid, call API to save customer
    console.log(model, isValid)
 
  }
}
