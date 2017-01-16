export interface User {
   name: string;  // required with minimum 5 characters
   address?: {
      street?: string;
      postcode?: string;
   }
}