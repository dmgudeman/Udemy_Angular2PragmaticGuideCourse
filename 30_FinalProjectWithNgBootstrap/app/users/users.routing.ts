import { Route, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details.component';
import { UsersExperimentalComponent } from './users-experimental.component';
import { UsersFormComponent } from './users-form.component';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';
import { AuthGuard } from '../auth-guard.service';


export const usersRouting = RouterModule.forChild([
   { path: 'users', component: UsersComponent },
   { path: 'users/:id', component: UserDetailsComponent },
   { path: 'users-experimental', 
         component: UsersExperimentalComponent 
   },
//    { path: 'users-form', 
//          component: UsersFormComponent,
//          canActivate : [ AuthGuard ],
//          canDeactivate: [ PreventUnsavedChangesGuard ]
//    }
   { path: 'users-form/:id', 
         component: UsersFormComponent,
         canActivate : [ AuthGuard ],
         canDeactivate: [ PreventUnsavedChangesGuard ]
   }
   
])