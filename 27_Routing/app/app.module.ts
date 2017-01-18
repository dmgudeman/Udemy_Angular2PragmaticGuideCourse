import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { PhotoService }  from './photo.service';
import { AlbumsComponent } from './albums.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'albums', component: AlbumsComponent},
  { path: 'contact', component: ContactComponent},
  // { path: '',   redirectTo: '/albums', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  //  AppRoutingModule
     ],
  declarations: [ 
    AppComponent,
    AlbumsComponent,
    ContactComponent,
    PageNotFoundComponent
    ],
  bootstrap:    [ AppComponent ],
  providers:    [
    PhotoService
  ]
})
export class AppModule { }
