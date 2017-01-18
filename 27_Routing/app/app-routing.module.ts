import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AlbumsComponent } from './albums.component';
import { ContactComponent } from './contact.component';

const appRoutes: Routes = [
      {
         path: 'albums',
         component: AlbumsComponent
      },
      {
         path: 'contact',
         component: ContactComponent
      },
      { path: '', redirectTo: 'albums', pathMatch:'full'}



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
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
//   providers: [
//     CanDeactivateGuard
//   ]
})
export class AppRoutingModule {}