import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PhotosComponent } from './photos/photos.component';
import { MessagesComponent } from './messages/messages.component';
import { NotFoundComponent } from './not-found.component';

// forRoot takes an array of route objects and returns a Module
export const routing = RouterModule.forRoot([
   { path: '', component: HomeComponent },
   { path: 'messages', component:MessagesComponent },
   { path: 'photos', component: PhotosComponent },
   { path: '**', component: NotFoundComponent },

]);