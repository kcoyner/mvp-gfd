/*
 * app.component.ts
 */

import  { Component } from '@angular/core';

import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    messages: Message []  = [
      new Message ('a message from parent to child', 'Kevin'),
      new Message ('another message', 'Kevin'),
    ];
}
