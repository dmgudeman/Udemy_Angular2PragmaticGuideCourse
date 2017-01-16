export interface User {
   name: string;  // required with minimum 5 characters
   addresses: Address[];
   }

   export interface Address {
      street:string;
      postcode: string;
   }