import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routing = RouterModule.forRoot ([
   { path: '', component: HomeComponent },
   { path: 'posts', component: PostsComponent },
   { path: 'users', component: UsersComponent },
   { path: '**', component: NotFoundComponent },

])
