/*
 * message-list.component.ts
 */

import  { Component } from '@angular/core';
import { Message } from './message.model';

@Component({
    selector: 'app-message-list',
    template: `
      <div class="col-md-8 col-md-offset-2">
            <app-message
                [message]="message"
                (editClicked)="message.content = $event"
                *ngFor="let message of messages">
            </app-message>
      </div>
    `
})

export class MessageListComponent {
    messages: Message[]  = [
      new Message ('a message from parent to child', 'Kevin'),
      new Message ('another message', 'Kevin'),
    ];
}
