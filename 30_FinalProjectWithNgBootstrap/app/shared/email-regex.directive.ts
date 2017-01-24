import { AbstractControl } from '@angular/forms';

export function emailRegexValidator(nameRe: RegExp){
   return (control: AbstractControl): {[key: string]: any} =>{
      const name = control.value;
      const no = nameRe.test(name);
   return no ? { 'emailAddress': {name}} : null;
   }
}