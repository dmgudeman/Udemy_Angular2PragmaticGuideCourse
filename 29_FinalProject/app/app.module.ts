import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { routing }         from './app.routing';

import { AppComponent }    from './app.component';
import { HomeComponent }   from './home.component';
import { NavBarComponent } from './navbar.component';
import { NotFoundComponent } from './not-found.component';
import { PostsComponent }  from './posts.component';
import { UsersComponent }  from './users.component';


@NgModule({
  imports:      
  [ 
    BrowserModule,
    routing
  ],

  declarations: 
  [ 
    AppComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent,
    PostsComponent,
    UsersComponent,
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
