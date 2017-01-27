import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicValidators } from './basicValidators';
@NgModule({
   imports: [
      CommonModule,
   ],
   declarations: [
      BasicValidators
   ],
   exports: [
      BasicValidators
   ],
   providers: [
   ],

})
export class SharedModule{} 