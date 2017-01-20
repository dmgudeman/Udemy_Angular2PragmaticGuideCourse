
import { Component }       from '@angular/core';
import { FormGroup }       from '@angular/forms';

import { FormComponent }   from '../prevent-unsaved-changes-guard.service';
import { MessagesService } from './messages.service';

@Component({
    selector: 'messages',
    template: `<h1>Messages</h1>
    <input [(ngModel)]="title">
    <ul>
        <li *ngFor="let m of messages">{{ m }}</li>
    </ul>
    `
})
export class MessagesComponent implements FormComponent {
    messages;
    title = "New Message";
    form: FormGroup;
    hasUnsavedChanges;

    constructor(service : MessagesService) {
        this.messages = service.getMessages();
    }
}