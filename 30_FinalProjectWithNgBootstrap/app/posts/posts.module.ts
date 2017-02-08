import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsService } from './posts.service';

import { postsRouting } from './posts.routing';



@NgModule({
   imports: [
      CommonModule,
      postsRouting,
      ReactiveFormsModule
   ],
   declarations: [
      PostsComponent,
   ],
   exports: [
      PostsComponent,
   ],
   providers: [
      PostsService,
   ],

})
export class PostsModule { }