import { Component } from '@angular/core';
import { TweetService } from './tweet.service';

@Component({
    selector: 'tweet',
    moduleId: module.id,
    template: `
    <ul>
    <li *ngFor=" let tweet of tweets">
    
    <div class="media">
        <div class="media-left">
            <a href="#">
            <img class="media-object" src="{{tweet.imageUrl}}" alt= "guerilla">
           
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">{{tweet.name}}<span style="color:#ccc">{{tweet.email}}</span></h4>
                {{tweet.post}}
                <br>
                <i
    class="glyphicon
        glyphicon-heart"
        [style.color] = "!tweet.isFavorite ? '#ccc' : 'deeppink' "
        style = "cursor:pointer"
        (click)="onClick(tweet)"
    >
    </i> {{tweet.likes}}
        </div>
        </div>
    </li>
  </ul>
    `,
    styles: [`
        .glyphicon-heart {
            font-size: 1.2em;
        }
        #greyed {
            font-color: red;
        }
    
    `
        
    ]
})

export class TweetComponent {
    tweets: string[];
    isFavorite:boolean =false;
    favoriteTally:number;
    
    constructor(private tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
        
    }
    onClick(tweet) {
       tweet.isFavorite = !tweet.isFavorite;
        tweet.likes = (tweet.isFavorite ? ++tweet.likes : --tweet.likes)
        console.log(tweet.isFavorite);
    }

}

