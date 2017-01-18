import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/from';
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";

//http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/
@Component({
   selector: 'forms2',
   template: `
    <h2>{{name}}</h2>
    <form [formGroup] ="signupForm" novalidate>
        <label for="a">a</label>
        <input 
           type="text" 
           id="a"
           formControlName="search">
           <label for="b">b</label>
        <input 
           type="text" 
           id="b"
           formControlName="b_search">
        <br>
        <button (click)="calcDates()">Get Dates</button>
        <br>
        <button (click)="makeObservable()">Make Observable</button>
        <br>
        <button (click)="makeTimer()">Make Timer</button>
        <br>
        <button (click)="simulateAJAXcall()">Simulate AJAX call</button>
        <br>
        <button (click)="forJoinExample()">forJoinExample</button>
        <br>
        <button (click)="handleError()">Handle Errors</button>
        <br>
        <button (click)="obsRetry()">Retry Observable</button>
        <br>
        <button (click)="catchExample ()">Catch Example</button>
        <br>
        <button (click)="timeOutExample()">Time Out Example</button>
        <br>
        <button (click)="notifyDone()">Notify Done</button>

      </form>

  `

})
export class Forms2Component {
   name: string = '23b. Observables Exercise - Reactive Forms';

   signupForm: FormGroup;

   constructor( @Inject(FormBuilder) fb: FormBuilder) {

      this.signupForm = fb.group({
         search: ['', <any>Validators.required],
         b_search: ['hi', <any>Validators.required]
      })
      const stream$ = this.signupForm.valueChanges;

      stream$
         .debounceTime(400)
         .subscribe(x => console.log(x))
   }
   onSubmit(value: string): void {
      console.log('you submitted value: ', value);

   }

   calcDates() {
      var observable = Observable.from([1, 2, 3]);
      var startDates: Date[] = [];
      var startDate = new Date()
      for (var day = -2; day <= 2; day++) {
         var date = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDay() + day

         );
         startDates.push(date);
         Observable
            .from(startDates)
            .map(date => {
               console.log("Getting deals for date " + date);
               return [1, 2, 3];
            })
            .subscribe(x => console.log(x))
      }

   }
   makeObservable() {
      // var observable = Observable.empty();
      var observable = Observable.range(1, 5);
      // var observable = Observable.from([1,2,3]);
      // var observable = Observable.of([1,2,3]);
      observable.subscribe(x => console.log(x));

   }
   makeTimer() {
      var observable = Observable.interval(1000);
      observable
         .map(x => {
            console.log("calling ther server to get the latest news");
            return [1, 2, 3];
         })
         .subscribe(news => console.log(news));
   }
   simulateAJAXcall() {
      var observable = Observable.interval(1000);
      observable
         .flatMap(x => {
            console.log("calling ther server to get the latest news");
            return [1, 2, 3];
         })
         .subscribe(news => console.log(news));
   }
   forJoinExample() {
      var userStream = Observable.of({
         userId: 1, username: 'David'
      }).delay(2000);
      var tweetStream = Observable.of([1, 2, 3]).delay(1500);
      Observable
         .forkJoin(userStream, tweetStream)
         .map(joined => new Object({
            user: joined[0], tweets: joined[1]
         }))

         .subscribe(result => console.log(result));
   }
   handleError() {
      var observable = Observable.throw(new Error("Something failed"));
      observable
         .subscribe(x => console.log(x),
         error => console.error(error));
   }
   obsRetry() {
      var counter = 0;
      var ajaxCall = Observable.of('url')
         .flatMap(() => {
            if (++counter < 2)
               return Observable.throw(new Error("Request failed"));
            return Observable.of([1, 2, 3]);
         });
         ajaxCall
            .retry(3)
            .subscribe(
               x => console.log(x),
            error=> console.log(error));
            
   }
   catchExample () {
    // var remoteDataStream = Observable.throw(new Error("Something failed."));
      var remoteDataStream = Observable.of([4,5,6]);
           
           remoteDataStream
           .catch(err => {
             var localDataStream = Observable.of([1,2,3]);
              return localDataStream;
           })
           .subscribe(x => console.log(x));
   }
   timeOutExample () {
      var remoteDataStream = Observable.of([1,2,3]).delay(5000);

      remoteDataStream
         .timeout(1000)
         .subscribe(
            x => console.log(x),
            error => console.error(error)
         );
   }
   notifyDone() {
      var observable = 
                  // Observable.throw(new Error("error"));
                  Observable.from([1,2,3]);
      
      observable.subscribe(
         x => console.log(x),          // arg1: the main function
         error => console.log(error),  // arg2: handle error
      () => console.log("completed")   // arg3: notification
      );
      
   }
}