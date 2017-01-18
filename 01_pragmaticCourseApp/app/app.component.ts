import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
import { VoterComponent } from './vote.component';
import { TweetComponent } from './tweet.component';
import { SummaryPipe } from './summary.pipe';
import { BootstrapPanel } from './bootstrap-panel.component';
import { ZippyComponent } from './zippy.component';
import { ContactFormComponent } from './contact-form.component';
@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular App</h1>
    <courses></courses>
    <authors></authors>
    
    <h2>Voter Template</h2>
    <voter></voter>
    
    <h2>Favorite Template</h2>
    <favorite></favorite>
    
<h2>5. Tweet Template</h2>
      <tweet></tweet>
    
<h2>6. Hide Kourses</h2>
      <div [hidden]="kourses.length == 0"> 
        List of courses
      </div>
      <div  [hidden]="kourses.length > 0">
        You don't have any courses yet.
      </div> 
     
<h2>7. ngSwitch Demonstration</h2>
        <ul class="nav nav-pills">
          <li><a (click)="viewMode = 'map'">Map View</a></li>
          <li><a (click)="viewMode = 'list'">List View</a></li>
        </ul>
        <div [ngSwitch]="viewMode">
          <p *ngSwitchCase ="'map'">Map View Content</p>
          <p *ngSwitchCase="'list'">List View Content</p>
        </div>
      
<h2>8. List of Kourses with *ngFor</h2>
        <ul>
          <li *ngFor="let kourse of kourses, let i = index">{{ i+1 }} - {{kourse}}</li>
        </ul>

<h2>9. Posts showing Pipes</h2>
        <div>
          {{post9.title}}
          <br/>
          {{post9.body | summary: 18 }}
       </div> 

<h2>10. ngClass </h2>
        <i 
          class="glyphicon"
          [ngClass]="{'glyphicon-star':isFavorite, 'glyphicon-star-empty':!isFavorite}"
          (click)="onClick()">
        </i>
        
<h2>11. ngStyle </h2>
          <button
             [ngStyle]="{
               'backgroundColor': (canSave ? 'blue' : 'gray'),
               'color': (canSave ? 'white' : 'black'),
               'fontWeight': (canSave ? 'bold' : 'normal')
               
             }"
             (click)="onClickCanSave()">
                Submit
         </button>

<h2> 12. Elvis Operator: property?. <h2>
       <h4>for properties that could be null<h4>
       
       <ul>
        <li>Title: {{ task.title }}</li>
        <li>Assigned to: {{ task.assignee?.name }}</li>
      </ul>
      
<h2> 13. ng-content </h2>
      <h4>Supplies HTML markup entered in the host component</h4>
      <h4>to the template.  Inside the template insertion points<h4>
      <h4>are identified with ng-content and CSS class selectors</h4>
      
      <bs-panel>
        <div class="heading">This is in app.component.ts - heading</div>
        <div class="body">This is in app.component.ts - body</div>
        
      </bs-panel>
      
<h2>14. Zippy Code Challenge</h2>
      <zippy title='Who can see my stuff?'>
        Content of who can see my stuff
      </zippy>
      <zippy title='Who can contact me?'>
        Content of who can contact me
      </zippy>

<h2>15. Form by Template method</h2>
      <contact-form></contact-form>
    `
})
export class AppComponent {
  post = {
    voteCount: 10,
    myVote: 0
  }
  kourses = ["Kourse1", "Kourse2", "Kourse3"];
  onVote($event) {
    console.log($event);
  }
  viewMode = 'map';

  // 9. methods for Posts
  post9 = {
    title: "Angular Tutorial for Beginners",
    body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
     penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
     Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
     Nulla consequat massa quis enim. `
  }

  // 10. ngClass 
  isFavorite: boolean;

  onClick() {
    this.isFavorite = !this.isFavorite;
    console.log(this.isFavorite)
  }
  
  // 11. ngStyle
  canSave = true;
  onClickCanSave() {
    this.canSave = !this.canSave;
    console.log(this.canSave);
  }
  
  // 12. Elvis operater: ?.
  task = {
    title: "Review applications",
    assignee: null
  }
  
  

  
  
  
  
  
}
