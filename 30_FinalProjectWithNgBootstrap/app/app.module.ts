import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routing';
import { usersRouting } from './users/users.routing';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UsersExperimentalComponent } from './users/users-experimental.component';
import { UserDetailsComponent } from './users/user-details.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { UsersService } from './users/users.service';
import { UsersExperimentalService } from './users/users-experimental.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    JsonpModule,
    usersRouting,
    routing,
     ],
  declarations: [ 
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    UsersExperimentalComponent,
    UserDetailsComponent,
    PostsComponent,
    NotFoundComponent,
    ],
  providers: [
    UsersService,
    UsersExperimentalService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
