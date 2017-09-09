/*
 * member.component.ts
 */

import { Component, Input } from '@angular/core';
import { Member } from './member.model';
import { MemberService } from './member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

export class MemberComponent {
  @Input() member: Member;

  constructor(private memberService: MemberService) {}

  onEdit() {
    this.memberService.editMember(this.member);

  }

  onDelete() {
    this.memberService.deleteMember(this.member)
      .subscribe(
        result => console.log(result)
    );
  }

  belongsToUser(){
    return localStorage.getItem('userId') === this.member.userId;
  }
}
