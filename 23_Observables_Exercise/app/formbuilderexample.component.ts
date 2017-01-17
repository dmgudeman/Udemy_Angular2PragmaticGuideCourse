import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, } from '@angular/forms';

@Component({
  selector: 'fb1',
  template: `
<!--1-->
 <form 
       [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">
   
    <label for="skuInput">SKU</label> 
<!--2--> 
    <input type="text"  
               id="skuInput"  
               placeholder="SKU"  
               formControlName='sku'>
     <button type="submit">Submit</button>  
 
 </form>
<!--
=================================================================================================
   1
We want to change our <form> to use myForm. If you recall, in the last section we said that ngForm is applied for us automatically when we use FormsModule. We also mentioned that ngForm creates its own FormGroup. Well, in this case, we don't want to use an outside FormGroup. Instead we want to use our instance variable myForm, which we created with our FormBuilder. How can we do that?

Angular provides another directive that we use when we have an existing FormGroup: it's called formGroup and we use it like this:
    
    <form [formGroup]="myForm" 

Here we're telling Angular that we want to use myForm as the FormGroup for this form.
 
  ================================================================================================
2
There's one last thing we need to do to make this work: bind our FormControl to the input tag. Remember that ngControl creates a new FormControl object, and attaches it to the parent FormGroup. But in this case, we used FormBuilder to create our own FormControls.

When we want to bind an existing FormControl to an input we use formControl:
        <label for="skuInput">SKU</label>  
        <input type="text"  
               id="skuInput"  
               placeholder="SKU"  
               [formControl]="myForm.controls['sku']">  <<<<<<<I didn't use this line
               
               I used this instead and it worked:
                 formControlName='sku'>

Here we are instructing the formControl directive to look at myForm.controls and use the existing sku FormControl for this input.
 ================================================================================================
 -->

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