import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumsListComponent }    from './albums-list.component';
import { AlbumDetailComponent } from './album-detail.component';

const albumsRoutes: Routes = [
  { path: 'albums/albums-list',  component: AlbumsListComponent },
  { path: 'album/:id', component: AlbumDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(albumsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AlbumDetailRoutingModule { }