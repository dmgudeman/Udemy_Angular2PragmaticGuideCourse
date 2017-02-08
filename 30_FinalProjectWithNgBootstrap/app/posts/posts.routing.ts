import { Route, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';



export const postsRouting = RouterModule.forChild([
      { path: 'posts', component: PostsComponent },
     // { path: 'posts/:id', component: PostDetailsComponent },
      // {
      //       path: 'posts',
      //       component: PostsComponent,
      // }
      
           
            
      
])

