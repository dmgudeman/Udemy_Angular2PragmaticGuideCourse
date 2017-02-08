import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Hero } from './hero'
import { UsernameValidators } from './usernameValidators';

export class HeroFormReactiveComponent{
heroForm: FormGroup;
hero:Hero;
constructor(private fb: FormBuilder) {}

ngOnInit(): void  {
   this.buildForm();
}

buildForm(): void {
   this.heroForm = this.fb.group ({
      'name' : this.hero.name, [
         Validators.required,
         Validators.minLength(4),
         Validators.maxLength(24),
         forbiddenName.validator(/bob/i)
      ]
      
   })
}

}