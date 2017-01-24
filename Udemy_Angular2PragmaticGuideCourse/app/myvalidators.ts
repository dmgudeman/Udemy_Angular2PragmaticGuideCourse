import { AbstractControl } from '@angular/forms';
export class MyValidators {
  
  
  
  static regex(pattern: RegExp): Function {
    
    
    
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      const no = pattern.test(name);
      console.log("no = "+ no +" " + name);
      return no ? null : {'pattern': {name} };
    };
  }
}
// import { AbstractControl } from '@angular/forms';
// export class MyValidators {
//   static regex(pattern: RegExp): Function {
//     return (control: AbstractControl): {[key: string]: any} => {
//       return control.value.match(pattern) ?{pattern: true}: null;
//     };
//   }
// }
// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): {[key: string]: any} => {
//     const name = control.value;
//     const no = nameRe.test(name);
//     return no ? {'forbiddenName': {name}} : null;
//   };
// }
