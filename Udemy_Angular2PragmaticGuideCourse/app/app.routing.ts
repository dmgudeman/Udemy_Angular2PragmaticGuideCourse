import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';


export const routing = RouterModule.forRoot([
   {
      path: '', component: HomeComponent
   },

   { path: 'home', component: HomeComponent },
   {
      path: 'posts',
      component: PostsComponent,
      canActivate: [AuthGuard]
   },
   { path: '**', component: NotFoundComponent },

]);
