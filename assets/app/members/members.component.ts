/*
 * members.component.ts
 */

import  { Component } from '@angular/core';

@Component({
    selector: 'app-members',
    template: `

        <!--
        <div class="row">
            <app-member-input></app-message-input>
        </div>
        -->

        <hr>
        <div class="row">
            <app-member-list></app-member-list>
        </div>
    `
})

export class MembersComponent {

}
