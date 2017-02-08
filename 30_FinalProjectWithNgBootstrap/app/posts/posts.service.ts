import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';


@Injectable()
export class PostsService {
   posts: string;
   onInit() {
      let posts = this.getPosts();
   }

   private postsUrl = "http://jsonplaceholder.typicode.com/posts";

   constructor(private http: Http) { }

   getPosts() {
      return this.http.get(this.postsUrl)
         .map(res => res.json());
   }

   getPost(postId: number) {
      return this.http.get(this.getPostUrl(postId))
         .map(res => res.json());
   }
   private getPostUrl(postId: number) {
      return this.postsUrl + "/" + postId;
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

   addPost(post: Post): Observable<Post> {

      return this.http.post(this.postsUrl, JSON.stringify(post))
         .map(res => res.json());


   }
   updatePost(post: Post) {
      return this.http.put(this.getPostUrl(post.id), JSON.stringify(post))
         .map(res => res.json());
   }

   deletePost(postId: number) {
      return this.http.delete(this.getPostUrl(postId))
         .map(res => res.json());
   }

}