/*
 * message-input.component.ts
 */

import  { Component } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    providers: [MessageService]
})


export class MessageInputComponent {
    constructor (private messageService: MessageService) {}


    onSave(value: string) {
        console.log(value);
        const message = new Message(value, 'Kevin');
        this.messageService.addMessage(message);
    }
}
