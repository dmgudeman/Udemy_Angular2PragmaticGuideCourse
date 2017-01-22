import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { UsersExperimentalComponent } from './users-experimental.component';
import { UserDetailsComponent } from './user-details.component';

import { UsersService } from './users.service';
import { UsersExperimentalService } from './users-experimental.service';
import { usersRouting } from './users.routing';

@NgModule({
   imports: [
      CommonModule,
      usersRouting,
   ],
   declarations: [
      UsersComponent,
      UsersExperimentalComponent,
      UserDetailsComponent
   ],
   exports: [
      UsersComponent,
      UsersExperimentalComponent,
      UserDetailsComponent
   ],
   providers: [
      UsersService,
      UsersExperimentalService
   ],

})
export class UsersModule { }