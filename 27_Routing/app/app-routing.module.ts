import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { PhotoService }  from './photo.service';
import { AlbumsComponent } from './albums.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './not-found.component';
const appRoutes: Routes = [
  
  { path: 'contact', component: ContactComponent},
  { path: 'albums', component: AlbumsComponent},
  { path: '',   redirectTo: '/albums', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]
// const appRoutes: Routes = [
//       {
//          path: 'albums',
//          component: AlbumsComponent
//       },
//       {
//          path: 'contact',
//          component: ContactComponent
//       },
//       { path: '', redirectTo: 'albums', pathMatch:'full'}



//   {
//     path: 'compose',
//     component: ComposeMessageComponent,
//     outlet: 'popup'
//   },
//   {
//     path: 'admin',
//     loadChildren: 'app/admin/admin.module#AdminModule',
//     canLoad: [AuthGuard]
//   },
//   {
//     path: 'crisis-center',
//     loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule'
//   },
//   { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent }
// ];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes), 
             /* Pass the array of routes to the RouterModule.forRoot method. It returns a module, containing the configured Router service provider, plus other providers that the routing library requires. Once the application is bootstrapped, the Router performs the initial navigation based on the current browser URL.

              */
  ],
  exports: [
    RouterModule
  ]
//   providers: [
//     CanDeactivateGuard
//   ]
})
export class AppRoutingModule {}