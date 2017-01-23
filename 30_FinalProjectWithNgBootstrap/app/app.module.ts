import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routing';
// import { usersRouting } from './users/users.routing';
import { UsersModule } from './users/users.module';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
// import { UsersComponent } from './users/users.component';
// import { UsersExperimentalComponent } from './users/users-experimental.component';
// import { UserDetailsComponent } from './users/user-details.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';

// import { UsersService } from './users/users.service';
// import { UsersExperimentalService } from './users/users-experimental.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule,
    UsersModule,
    routing,
     ],
  declarations: [ 
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
    NotFoundComponent,
    ],
  providers: [
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
