/*
 * app.component.ts
 */

import  { Component } from '@angular/core';
import { MessageService } from './messages/message.service';
import { MemberService } from './members/member.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MessageService, MemberService]
})

export class AppComponent {
}
