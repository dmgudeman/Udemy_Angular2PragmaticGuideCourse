import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { PhotoService }  from './photo.service';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
     ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [
    PhotoService
  ]
})
export class AppModule { }
