import { Component, OnInit, Inject } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { usersRouting } from './users.routing';
import { UserValidators } from './user-validators';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';
import { FormComponent } from './form-component.interface';
import { MyValidators } from '../myvalidators';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'users-form',
  templateUrl: 'app/users/users-form.component.html',
  styles: [`
      .ng-touched.ng-invalid.user-input-style {
        border: 1px solid red;
      }
     
   `]
})

export class UsersFormComponent implements OnInit{
  form: FormGroup;
  name: FormControl;
  user: FormGroup;
   EMAIL_REGEX:RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //EMAIL_REGEX:RegExp =/^\d{3}/;
  constructor( @Inject(FormBuilder)
  private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  
  guess(){

  }
  regex(pattern: RegExp): Function {
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      const no = pattern.test(name);
      console.log("no = "+ no +" " + name);
      return no ? null : {'pattern': {name} };
    };
  }
  ngOnInit() {
    this.form = this._fb.group({
      user: this._fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.compose([Validators.required,  this.regex())]),
        phone: ''
      }),
      address: this._fb.group({
        street: '',
        suite: '',
        city: '',
        zipcode: ''
      })
    });
}


  printEmail(){ 
    console.log(this.user.get("this is an email"+ this.user.get("email")));
    return this.user.get("email")}

  hasUnsavedChanges(form:FormGroup){
    if (form.dirty)
      return ("Are you sure?");
    return null;
  }
  
} 