import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from './user';


@Injectable()
export class UsersExperimentalService {

    private usersUrl = "http://jsonplaceholder.typicode.com/users";

    constructor(private http: Http) { }

    getUsers() {
        return this.http.get(this.usersUrl)
            .map(res => res.json());
    }
    private extractData(res: Response) {
        let body = res.json();

        return body.data || {}
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
    
    addUser(name:string):Observable<User>{
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        
        return this.http.post(this.usersUrl, {name}, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }


}
