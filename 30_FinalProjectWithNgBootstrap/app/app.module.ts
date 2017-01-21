import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports:      [ 
    BrowserModule,
   
     ],
  declarations: [ 
    AppComponent,
    NavbarComponent,
    UsersComponent,
    PostsComponent,
    NotFoundComponent,
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
