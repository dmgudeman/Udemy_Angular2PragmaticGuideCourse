
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
// import { FormsModule }   from '@angular/forms';
import { UsersService } from './users.service';



import { UsersComponent } from './users.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
        
        
   //      FormsModul
    ],
    declarations: [
        UsersComponent
    ],
    exports: [
        UsersComponent
    ],
    providers: [
        UsersService
    ]
})
export class UsersModule {
    
}