import { AbstractControl } from '@angular/forms';
export class MyValidators {
  static regex(pattern: RegExp): Function {
    return (control: AbstractControl): {[key: string]: any} => {
      return control.value.match(pattern) ? null : {pattern: true};
    };
  }
}

