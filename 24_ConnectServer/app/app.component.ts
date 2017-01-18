import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <div *ngIf = "isLoading"><i class =" fa fa-spinner fa-spin fa-3x"></i></div>
    `,
})
export class AppComponent implements OnInit {
  name = '24. Connecting to the Server';
  isLoading: boolean = true;

  constructor(private _postService: PostService) { }
  ngOnInit() {
    this._postService.getPosts()
      // if we return an Observable we use this:
      .subscribe(posts => {

      // if we use a Promise we use this:
      // .then(posts => {
        this.isLoading = false;
        console.log(posts[0].body);
      });
  }

}
