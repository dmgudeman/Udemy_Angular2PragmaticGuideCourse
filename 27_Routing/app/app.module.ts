import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { PhotoService }  from './photo.service';
import { AlbumsComponent } from './albums.component';
import { ContactComponent } from './contact.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
     ],
  declarations: [ 
    AppComponent,
    AlbumsComponent,
    ContactComponent 
    ],
  bootstrap:    [ AppComponent ],
  providers:    [
    PhotoService
  ]
})
export class AppModule { }
