import { Component, OnInit, Inject } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
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
      //  private usersExperimentalService: UsersExperimentalService,
       ) {}

   ngOnInit() {
      //  this.addForm = new FormGroup({
      //     user: new FormGroup({
      //        name: new FormControl(),
      //        email: new FormControl(),
      //        phone: new FormControl()
      //     })
      //  })
          this.addForm = this._fb.group({
             user: this._fb.group({
                name: '',
                email: '',
                phone:'',
             }),
             address: this._fb.group({
                street: '',
                suite: '',
                city:'',
                zipcode:'',
             })
          })
       }
   
  
}
  