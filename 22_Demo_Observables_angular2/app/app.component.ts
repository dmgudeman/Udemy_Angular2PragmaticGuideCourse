/// <reference path="../typings/tsd.d.ts" />

import { Component } from 'angular2/core';
// import {Observable} from 'rxjs/Rx'; has lots of code
import {Observable} from 'rxjs/Observable'; // stripped down observable for production
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
    `
})
export class AppComponent {
    constructor () {
    // create an Observable with a static method from local objects
    var keyups = Observable.fromEvent($("#search"), "keyup")
        .map(e => e.target.value) // map translates an object into another form
        .filter(text=> text.length > 3) // only returns text with greater than three characters
        .debounceTime(400) // debounce from rxjs
        .distinctUntilChanged() // doesn't fire when you arrow around not changing the text 
                                // but causing keyup events. 
        .flatMap(searchTerm => { //flatMap takes a list of lists and flattens it into an object
              var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
              var promise = $.getJSON(url) // $.getJSON(url) returns a promise
              var observable = Observable.fromPromise(promise); // translated to an observable
        
                return observable;
        });
     // now that we have an Observable we can subscribe to it
     var subscription = keyups.subscribe(data=>console.log(data)); //returns a subscription object
        subscription.unsubscribe(); 
    }

    // // e is the event object. #search refers to template id= search. 
    // constructor() {
    //     // debounce is a library of methods. In this case want to guard against typing
    //     // too fast and flooding the server
    //     var debounced = _.debounce(function (text) {
    //         // need to have an jquery ajax call to call spotify
    //         var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
    //         $.getJSON(url, function (artists) {
    //             console.log(artists);
    //         })

    //     }, 400)
    //     $("#search").keyup(function (e) {
    //         var text = e.target.value;
    //         if (text.length < 3)
    //             return;
    //         debounced(text);


    //     })
    // }
}