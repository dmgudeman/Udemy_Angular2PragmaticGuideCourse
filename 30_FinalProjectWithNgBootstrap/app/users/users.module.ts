import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, 
   FormGroup, FormControl, FormControlName, FormGroupName } from '@angular/forms';
import { UsersExperimentalComponent } from './users-experimental.component';
import { UserDetailsComponent } from './user-details.component';
import { UsersFormComponent } from './users-form.component';

import { UsersService } from './users.service';
import { UsersExperimentalService } from './users-experimental.service';
import { usersRouting } from './users.routing';

@NgModule({
   imports: [
      CommonModule,
      usersRouting,
      ReactiveFormsModule
   ],
   declarations: [
      UsersComponent,
      UsersExperimentalComponent,
      UserDetailsComponent,
      UsersFormComponent,
   ],
   exports: [
      UsersComponent,
      UsersExperimentalComponent,
      UserDetailsComponent,
      UsersFormComponent,
   ],
   providers: [
      UsersService,
      UsersExperimentalService,
   ],

})
export class UsersModule { }