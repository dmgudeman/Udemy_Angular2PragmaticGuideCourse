import { Component, OnInit, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { usersRouting } from './users.routing';

// import { UsersExperimentalService } from './users-experimental.service';
//import { usersRouting } from './users.routing';

@Component({
   selector: 'users-form',
   templateUrl: 'app/users/users-form.component.html',
   styles: [`
     
   `]
})

export class UsersFormComponent implements OnInit {
   addForm: FormGroup;
   name: FormControl;
   user: any;

    constructor(@Inject(FormBuilder) 
       private _fb: FormBuilder,
       private _route: ActivatedRoute, 
       private _router: Router
       ) {}

   ngOnInit() {
          this.addForm = this._fb.group({
             user: this._fb.group({
                name: [null, Validators.compose([
                                 Validators.required,
                                 Validators.minLength(3)])
                      ],
                email: [null, Validators.compose([
                                 Validators.required,
                                 Validators.minLength(3)])
                      ],
                phone:'',
             }),
             address: this._fb.group({
                street: '',
                suite: '',
                city:'',
                zipcode:''
             })
          })
       }
   submitForm(value: any){
    console.log(value);
  }
  onClick(value:any){
     console.log(value);
  }
}
  