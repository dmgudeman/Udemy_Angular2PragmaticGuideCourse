import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'king',
    templateUrl: 'app/king.component.html'

})

export class KingComponent {

    order: string = "should we go?";
    @Output() king = new EventEmitter<string>();

    sendKingsOrders() {
        console.log (this.order);
        this.king.emit(this.order);
        this.order=""
        console.log (this.order);
    }


}