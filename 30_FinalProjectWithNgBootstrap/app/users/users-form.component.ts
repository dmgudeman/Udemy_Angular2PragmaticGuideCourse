import { Component, OnInit, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { usersRouting } from './users.routing';

import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';
import { FormComponent } from './form-component.interface';
import { MyValidators } from '../myvalidators';
import { UsersExperimentalService } from './users-experimental.service';


@Component({
  selector: 'users-form',
  templateUrl: 'app/users/users-form.component.html',
  styles: [`
     
   `]
})

export class UsersFormComponent implements OnInit {
   errorMessage: string;
  form: FormGroup;
  iId:any;
  name: FormControl;
  title:string;
  user:any;

  EMAIL_REGEX: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor( @Inject(FormBuilder)
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _usersExperimentalService: UsersExperimentalService,
   
  ) {
  this.form = this._fb.group({
    user: this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', MyValidators.regex(this.EMAIL_REGEX)], //Validators.pattern(emailRegex)]],
      phone: ''
    }),
    address: this._fb.group({
      street: '',
      suite: '',
      city: '',
      zipcode: ''
    })
  })
  }

  ngOnInit() {

    var oId = this._route.params.subscribe(params => {
      this.iId = +params["id"];
       console.log("id = " + this.iId);
      this.title = this.iId ? "Edit User" : "New User";

      if (!this.iId)
        return;
       this._usersExperimentalService.getUser(this.iId)
                  .subscribe(
                  user => {console.log("you there")},//this.user = user,
                  error => this.errorMessage = <any>error
                  ); 

      // this._usersExperimentalService.getUser(id)
      //   .subscribe(
      //   user => this.user = user,
      //   response => {
      //     if (response.status == 404) {
      //       this._router.navigate(['NotFound']);
      //     }
      //   });
    });
  }

  validateEmail(c: FormControl) {

    if (c.value)
      return this.EMAIL_REGEX.test(c.value);

    return null;
  }
  hasUnsavedChanges(form: FormGroup) {
    if (form.dirty)
      return ("Are you sure?");
    return null;
  }
  save() {
    this._usersExperimentalService.addUser(this.form.value)
      .subscribe(x => {
        // Ideally, here we'd want:
        // this.form.markAsPristine();
        this._router.navigate(['users-experimental']);
      });
  }

  
  onClick(){
    console.log("hi there" + this.iId);
    console.log(this.user);
  }

}