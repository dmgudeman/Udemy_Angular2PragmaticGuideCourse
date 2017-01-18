
import { Component } from '@angular/core';


@Component({
    selector: "favorite",
    template: `
    <div>
   <i
    class="glyphicon
        glyphicon-heart"
        [style.color] = "!isFavorite ? '#ccc' : 'deeppink' "
        style = "cursor:pointer"
        (click)="onClick()"
    >
    </i> 
    <span>{{favoriteTally}}</span>
    </div>
    `


})
export class FavoriteComponent {
    isFavorite: boolean = false;
    favoriteTally: number = 10;

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.favoriteTally = (this.isFavorite ? ++this.favoriteTally : --this.favoriteTally)
        console.log(this.isFavorite);
    }


}