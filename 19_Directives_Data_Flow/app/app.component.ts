import {Component, Input} from '@angular/core';

@Component({
  selector: 'ua-header',
  template: `<div>{{title}}  <span [ngClass]='{myClass: toggle}'>{{toggle}}</span></div>`,
  styles:   [`div { color: steelblue; text-align: center; }
    .myClass {color:red; text-align:right;}`]
})
export class UaHeaderComponent {
  @Input('myTitle') title:string;
  @Input() toggle:boolean;
}

@Component({
  selector: 'ua-question',
  template: `<div>Q: {{question}}</div>`,
  styles:   [`div { margin: 0.5em 0; }`]
})
export class UaQuestionComponent {
  @Input() question:string;
}

@Component({
  selector: 'ua-answer',
  template: `<div>A: {{answer}}</div>`
})
export class UaAnswerComponent {
  @Input() answer:string;
}

@Component({
  selector:   'my-app',
  template: `<ua-header [myTitle]="appTitle" [toggle]="toggle"></ua-header>
    <button (click)="changeClass()">change class</button>
    <button (click)="changeTitle()">change title</button>
    <ua-question [question]="question"></ua-question>
    <ua-answer [answer]="answer"></ua-answer>
    <p>Angular version: {{angularVersion}}`
})
export class AppComponent {
  toggle = true;
  appTitle = `Udemy Course - Q&A App`;
  question = 'Why should I use Angular 2 instead of just Web Components?';
  answer   = 'Angular 2 has automatic, application-wide change detection.';
  angularVersion = 'latest stable';
constructor() { console.clear(); }
  changeTitle() {
    this.appTitle += ' *';
  }
  changeClass(){
     this.toggle = !this.toggle;
  }
}
