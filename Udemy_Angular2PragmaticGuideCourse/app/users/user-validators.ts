import { FormControl } from '@angular/forms';

export class UserValidators {

   static validateEmail(email: FormControl) {
        var flag:any;
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      flag = re.test(email.value);
      console.log(flag);
      if (!flag){
       return {validateEmail: true};
      }

      return null;
   }
   
}