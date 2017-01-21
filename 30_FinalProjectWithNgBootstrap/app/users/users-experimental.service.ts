import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { USERS } from './mock-users';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersExperimentalService {
   private usersUrl = 'app/users/mock-users-experimental';


   constructor(private http: Http) { }
   getUsers(): Observable<any> {
      return this.http.get(this.usersUrl)
         .map(this.extractData)
         .catch(this.handleError);
   }

   private extractData(res: Response) {
      let body = res.json();
      return body.data || {};
   }

   private handleError (error: Response | any){
      let errMsg: string;
      if(error instanceof Response) {
         const body = error.json() || '';
         const err = body.error || JSON.stringify(body);
         errMsg = `${error.status} - ${error.statusText || ''}`;
      } else {
         errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
   }


   //this.users = http://jsonplaceholder.typicode.com/users

}