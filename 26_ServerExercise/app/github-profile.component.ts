import {Component, OnInit} from '@angular/core';
import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {GitHubService } from './github.service';

@Component  ({
   selector: 'github-profile',
   styles: [
      `
      .avatar {
         width: 100px;
         height: 100px;
         border-radius: 100%;
      }
      `
   ],
   template:
   `
    <h2 *ngIf="isLoading">Loading</h2>
      <h2>@{{ user.login}}</h2>
      <img class="avatar" src="{{user.avatar_url }}">

      <h3>Followers</h3>
 <div *ngFor=" let follower of followers" class="media">
    
      <div class="media-left">
            <a href="#">
               <img class="media-object avatar" src="{{ follower.avatar_url }}" alt="...">
            </a>
     </div>
      <div class="media-body">
               <h4 class="media-heading">{{follower.login}}</h4>
      </div>
 </div>
    `
})

export class GitHubComponent {
   isLoading = true;
   username="octocat";
   user={}
   followers:any[]=[];
   

   constructor(private _gitHubService: GitHubService){}

   ngOnInit() {
      Observable.forkJoin (
          this._gitHubService.getUser(this.username),
           this._gitHubService.getFollowers(this.username)
      )
      .subscribe(
         res=>{
            this.user=res[0];
            this.followers = res[1];
         },
         null,
         () => { this.isLoading = false; }

      )
   }

}