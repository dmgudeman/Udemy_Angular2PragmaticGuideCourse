import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { MessagesModule } from './messages/messages.module'; 
import { PhotosModule } from './photos/photos.module';
import { routing } from './app.routing';
import { photosRouting } from './photos/photos.routing';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';


@NgModule({
  imports:
  [
    BrowserModule,
  
    MessagesModule,
    PhotosModule,
    // need to put child routing before the rootRouting because otherwise in the routing map
    // in appModule it will fall through to ** notFound.
    photosRouting,
    routing
    
  ],
  declarations: 
  [ 
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:[
    AuthGuard,
    AuthService,
    PreventUnsavedChangesGuard
  ]
})
export class AppModule { }