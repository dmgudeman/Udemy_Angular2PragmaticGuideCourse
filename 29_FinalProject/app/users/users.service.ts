import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
	private _url = "http://jsonplaceholder.typicode.com/users";

	constructor(private _http: Http){
	}

	getUsers(){
		return this._http.get(this._url)
			.map(res => res.json());
	}

}




// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

// import { Injectable } from '@angular/core';
// import { UsersData } from './users-data';

// @Injectable()
// export class UsersService {
//   private _url = "https://jsonplaceholder.typicode.com/users";
//   errorMessage: string;
//    users :any;
//    mode='Observable';


//   constructor (private _http: Http){

//   }

// getUsers(): Observable<any[]> {
//       return this._http.get(this._url)
//          .map(res => res.json());
//    }


// }



