import { Component, OnInit } from '@angular/core';
import { GitHubService } from './github.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <github-profile></github-profile>
   
    `,
})
export class AppComponent {
  name = '24. Connecting to the Server';
  
  

}
