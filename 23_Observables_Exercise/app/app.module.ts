import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { Forms1Component } from './forms1example.component';
import { FBComponent } from './formbuilderexample.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
     ],
  declarations: [ 
    AppComponent,
   Forms1Component,
   FBComponent 
],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
