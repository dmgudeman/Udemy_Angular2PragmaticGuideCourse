import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//import { SharedModule }              from '../shared/shared.module';
import { SignUpFormComponent } from './signup-form.component';

@NgModule({
  imports:      [ 
      ReactiveFormsModule,
      BrowserModule ],
  declarations: [ SignUpFormComponent],
  exports:      [ SignUpFormComponent]
})
export class SignUpFormModule { }