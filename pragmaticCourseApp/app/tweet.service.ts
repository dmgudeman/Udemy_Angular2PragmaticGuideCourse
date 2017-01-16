import { Injectable } from '@angular/core';

@Injectable()
export class TweetService {
    getTweets() : any[] {
        return [
            {
                name:"Windward",
                email:"@windwardstudios",
                post:"looking for a better company reporting or docgen app?",
                likes:0,
                imageUrl: "http://lorempixel.com/100/100/people?1",
                isFavorite: false
            },
            {
                name:"Angular JS news",
                email:"@angularjs_news",
                post:"Right Relevance: Influencers, Articles and Conversations",
                likes:5,
                imageUrl:"http://lorempixel.com/100/100/people?2",
                isFavorite: false
            },
            {
                name:"UX & Bootstrap",
                email:"@3rdwave",
                post:"10 Reasons Why Web Projects Fail",
                likes:1,
                imageUrl:"http://lorempixel.com/100/100/people?3",
                isFavorite: false
            }
            ];
    }
}