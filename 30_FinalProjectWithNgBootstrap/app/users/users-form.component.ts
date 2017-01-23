import { Component, OnInit, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { usersRouting } from './users.routing';
import { UserValidators } from './user-validators';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';



@Component({
   selector: 'users-form',
   templateUrl: 'app/users/users-form.component.html',
   styles: [`
     
   `]
})

export class UsersFormComponent implements OnInit {
   form: FormGroup;
   name: FormControl;
   user: any;

    constructor(@Inject(FormBuilder) 
       private _fb: FormBuilder,
       private _route: ActivatedRoute, 
       private _router: Router
       ) {}

   ngOnInit() {
          this.form = this._fb.group({
             user: this._fb.group(this.initUserEmailModel()),
             address: this._fb.group({
                street: '',
                suite: '',
                city:'',
                zipcode:''
             })
          })
       }
       initUserEmailModel(){
       var flag:any;
       const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         
         flag = Validators.pattern(emailRegex);
       const model = {
          name: [null,[Validators.required, Validators.minLength(3)]],
          email: [null, [Validators.required,Validators.pattern(emailRegex)]],
          phone:'',
       };
       return model;
       }
       
   
   submitForm(value: any){
    console.log(value);
    console.log(UserValidators.validateEmail);
  }
  onClick(value:any){
     console.log(value);
  }
  
//   validateEmail(email:string) {
//   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }

}
  
  