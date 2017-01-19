import { Router, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos.component';
import { PhotoDetailsComponent } from './photo-details.component';

// forChildtakes an array of route objects and returns a Module
// forRoot is used only once in the Root Module
export const photosRouting = RouterModule.forChild([
   { path: 'photos/:id', component: PhotoDetailsComponent },
   { path: 'photos', component: PhotosComponent },

]);