import { Router, RouterModule } from '@angular/router';

import { AppComponent }       from './app.component';
import { HomeComponent }      from './home.component';
import { UsersComponent }     from './users.component';
import { PostsComponent }     from './posts.component';
import { NotFoundComponent }  from './not-found.component';
//import { AuthGuard } from './auth-guard.service';
//import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

// forRoot takes an array of route objects and returns a Module
export const routing = RouterModule.forRoot([
   { path: ' ', component: HomeComponent },
   { path: '', component: HomeComponent },
   { 
      path: 'users', 
      component:UsersComponent
      // If there are multiple guards in the arrray
      // the array of guards below, compiler starts at first one and marches
      // down the array until it hits a false then stops.


      // canActivate: [ AuthGuard ],
      // canDeactivate: [ PreventUnsavedChangesGuard ]
    },
    {
      path: 'posts',
      component: PostsComponent
    },
   { path: '**', component: NotFoundComponent },

]);