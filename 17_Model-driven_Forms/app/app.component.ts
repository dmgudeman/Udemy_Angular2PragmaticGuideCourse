// 1/15/2017 using this tutorial
// https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { User } from './user.interface';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
  
})
export class AppComponent { 
  title = '17. Sign-up Form'; 
  public myForm:FormGroup;   // the model driven form, implements FormGroup interface
  public submitted: boolean; // keep track of submission status
  public events: any[]=[];   // use later to display form changes

  constructor( private _fb: FormBuilder) {} // to simplify form initialization
                            // angular high-jacks the constructor, so only put 
                            // dependency injection here
  ngOnInit() {
    // Long Syntax
    this.myForm = new FormGroup({
      name : new FormControl('sparky', [<any>Validators.required, <any>Validators.minLength(5)]),
      address: new FormGroup({
          street: new FormControl('', <any>Validators.required),
          postcode: new FormControl('8000')
      })
    })
  }
    // Short Syntax
    // this.myForm =this._fb.group({
    //   name:['', [<any>Validators.required, <any>Validators.minLength(5)],
    //   address: this._fb.group({
    //     street:['', <any>Validators.required],
    //     postcode:['']
    //   })
    // })
  save (model:User, isValid: boolean) {
    this.submitted = true; // set form submit to true

    // check if model is valid 
    // if valid, call API to save customer
    console.log(model, isValid)
  }
}
