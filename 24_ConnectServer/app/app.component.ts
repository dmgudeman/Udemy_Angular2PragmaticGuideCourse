import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <div *ngIf = "isLoading">Getting data...</div>
    `,
})
export class AppComponent implements OnInit {
  name = '24. Connecting to the Serever';
  isLoading: boolean = true;

  constructor(private _postService: PostService) { }
  ngOnInit() {
    this._postService.getPosts()
      .subscribe(posts => {
        this.isLoading = false;
        console.log(posts[0].body);
      });
  }

}
