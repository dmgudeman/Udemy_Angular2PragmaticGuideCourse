import { Component, Input } from '@angular/core';


@Component({
    selector: 'zippy',
    template: `
     <div class = "zippy">
        <div 
            class="zippy-title"
            (click)="toggle()">
            {{ title }}
            <i 
                class="pull-right glyphicon"
                [ngClass]="
                {
                    'glyphicon-chevron-up':isExpanded, 
                    'glyphicon-chevron-down':!isExpanded
                 }">
            </i>
        </div>
        <div *ngIf="isExpanded" class="zippy-content">
            <ng-content></ng-content>
        </div>
    </div>
    `
})
export class ZippyComponent {
    isExpanded: boolean;
    @Input() title: string;
    toggle() {
        this.isExpanded = !this.isExpanded;
        console.log("isExpanded " + this.isExpanded);
    }
}

