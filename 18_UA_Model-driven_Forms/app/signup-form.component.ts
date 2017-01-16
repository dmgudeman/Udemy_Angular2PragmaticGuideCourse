import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'signup-form',
  templateUrl: 'app/signup-form.component.html'
})
export class SignupFormComponent implements OnInit {
    user: FormGroup;
    ngOnInit() {
        this.user = new FormGroup({
            name: new FormControl('David'),
            account: new FormGroup({
                email: new FormControl('this'),
                confirm: new FormControl('yes')
            })
        })
    }
    onSubmit(){
        console.log(this.user.value, this.user.valid)
    }
  constructor() {}
}