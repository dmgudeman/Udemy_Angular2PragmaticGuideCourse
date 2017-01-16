import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpFormModule } from './signup-form.module';

import { AppComponent }  from './app.component';
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SignUpFormModule
    ],
  declarations: [ 
    AppComponent,
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
