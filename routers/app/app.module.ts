import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { MessagesModule } from './messages/messages.module'; 
import { PhotosModule } from './photos/photos.module';

@NgModule({
  imports: [
    BrowserModule,
    MessagesModule,
    PhotosModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }