import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';
import { usersRouting } from './users/users.routing';
import { UsersService } from './users/users.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    usersRouting,
    routing,
    
   
     ],
  declarations: [ 
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    UserDetailsComponent,
    PostsComponent,
    NotFoundComponent,
    ],
  providers: [
    UsersService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
