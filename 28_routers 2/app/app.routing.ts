import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
//import { PhotosComponent } from './photos/photos.component';
import { MessagesComponent } from './messages/messages.component';
import { NotFoundComponent } from './not-found.component';
import { AuthGuard } from './auth-guard.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

// forRoot takes an array of route objects and returns a Module
export const routing = RouterModule.forRoot([
   { path: '', component: HomeComponent },
   { 
      path: 'messages', 
      component:MessagesComponent,
      // If there are multiple guards in the arrray
      // the array of guards below, compiler starts at first one and marches
      // down the array until it hits a false then stops.
      canActivate: [ AuthGuard ],
      canDeactivate: [ PreventUnsavedChangesGuard ]
    },
   { path: '**', component: NotFoundComponent },

]);