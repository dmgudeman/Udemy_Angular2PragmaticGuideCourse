import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UsersExperimentalService {
   private usersUrl = 'app/users/mock-users-experimental.json';
//private usersUrl = "http://jsonplaceholder.typicode.com/users";


   constructor(private http: Http) { }
   getUsers(): Observable<User[]> {
        
      return this.http.get(`app/users/mock-users-experimental.json`)
         .map(response =><User[]>response.json())
         .catch(this.handleError);
   }

// getUsers(){
// 		return this.http.get(this.usersUrl)
// 			.map(res => res.json());
// 	}
//    private extractData(res: Response) {
//       let body = res.json();
//       console.log(body.data);
//       return body.data || {}
//    }

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
