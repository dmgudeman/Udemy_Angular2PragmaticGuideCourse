import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'signup-form',
    templateUrl: './signup-form.component.html'
})
export class SignUpFormComponent implements OnInit{
    signUpForm: FormGroup;
    username:string = 'sparky1';
    password: string;


    constructor(@Inject(FormBuilder) private fb: FormBuilder) { }
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.signUpForm = this.fb.group({
      username: 
      [this.username, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24)
        ]
     ],
      password: 'sparky'//[this.password, [Validators.required]]
    });
    this.signUpForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }
  onValueChanged(data?: any) {
    if (!this.signUpForm) { return; }
    const form = this.signUpForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  formErrors = {
    'username': '',
    'password': ''
  };
validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
    }
  };
    onSubmit(){
        console.log("Hi there");
    }
}