import { Route, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details.component';
import { UsersExperimentalComponent } from './users-experimental.component';

export const usersRouting = RouterModule.forChild([
   { path: 'users', component: UsersComponent },
   { path: 'users/:id', component: UserDetailsComponent },
   { path: 'users-experimental', component: UsersExperimentalComponent }
   
]);