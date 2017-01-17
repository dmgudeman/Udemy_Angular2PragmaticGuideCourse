import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Hero } from './hero'


export class HeroFormReactiveComponent{
heroForm: FormGroup;

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