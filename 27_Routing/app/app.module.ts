import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AlbumsList}

import { AppComponent } from './app.component';
import { PhotoService } from './photo.service';
//import { AlbumsComponent } from './albums/albums.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './not-found.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
   // AlbumsComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    PhotoService
  ]
})
export class AppModule { }
