import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <h1>Hello {{name}}</h1>
      <navbar></navbar>
      <posts></posts>
      <users></users>
      <not-found></not-found>
      `,
})
export class AppComponent  { name = 'Angular'; }
