import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class GitHubService {
      private _baseUrl = "https://api.github.com/users/";

      constructor(private _http: Http) { }

      getUser(username: string) {
            var x = this._http.get(this._baseUrl + username)
                  .map(res => res.json());
                  console.log(x);
                  return x;
      }

      getFollowers(username: string) {
            var y =this._http.get(this._baseUrl + username + "/followers")
                  .map(res => res.json());
                  console.log(y);
                  return y;
      }


}
