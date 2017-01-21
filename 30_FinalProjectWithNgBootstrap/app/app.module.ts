import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ 
    BrowserModule,
    routing
   
     ],
  declarations: [ 
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    NotFoundComponent,
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
