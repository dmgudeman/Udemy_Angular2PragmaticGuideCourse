import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, } from '@angular/forms';

@Component({
  selector: 'fb1',
  template: `

 <form 
       [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">
   
    <label for="skuInput">SKU</label> 

    <input type="text"  
               id="skuInput"  
               placeholder="SKU"  
               formControlName='sku'>
     <button type="submit">Submit</button>  
 </form>
  `
})

export class FBComponent {

   myForm: FormGroup;

   constructor(@Inject(FormBuilder)fb: FormBuilder){
      this.myForm = fb.group({
         'sku':['ABC123']
      })
   }
   onSubmit(value: string): void {
      console.log('you submitted value: ', value);
   }

}