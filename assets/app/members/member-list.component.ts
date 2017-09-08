/*
 * member-list.component.ts
 */

import  { Component, OnInit } from '@angular/core';
import { Member } from './member.model';
import { MemberService } from './member.service';

@Component({
    selector: 'app-member-list',
    template: `
      <div class="col-md-8 col-md-offset-2">
            <app-member
                [member]="member"
                *ngFor="let member of members">
            </app-member>
      </div>
    `
})

export class MemberListComponent implements OnInit {
    members: Member[]  = [];

    constructor (private memberService: MemberService) {}

    ngOnInit() {
        this.memberService.getMembers()
        .subscribe(
          (members: Member[]) => {
            this.members = members;
          }

        )


      ;
    }

}
