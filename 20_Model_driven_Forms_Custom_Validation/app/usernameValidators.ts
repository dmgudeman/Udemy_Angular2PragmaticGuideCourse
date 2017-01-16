import { FormControl } from '@angular/forms';


export class UsernameValidators {
   static cannotContainSpace( formControl: FormControl) {
      // Angular validators return:
      //   if passes validation: return null
      //   if validation fails: return {<validationRule>:<value>}
      if (formControl.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
      }
         return null
   }
}