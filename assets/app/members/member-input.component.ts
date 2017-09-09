/*
 * member-input.component.ts
 */

import  { Component, OnInit } from '@angular/core';
import { Member } from './member.model';
import { MemberService } from './member.service';
import  { NgForm } from '@angular/forms';

@Component({
    selector: 'app-member-input',
    templateUrl: './member-input.component.html'
})


export class MemberInputComponent implements OnInit {
    member: Member;

    constructor (private memberService: MemberService) {}


    onSubmit(form: NgForm) {
      if (this.member) {
        // edit
        this.member.firstName = form.value.firstName;
        this.memberService.updateMessage(this.member)
          .subscribe(
            result => console.log(result)
          );
        this.member = null;
      } else {
        // create a new member
        // const member = new Member(form.value.firstName, 'Kevin');

        // this.memberService.addMember(member)
        // .subscribe(
        //   data => console.log(data),
        //   error => console.error(error)
        // );

      }
      form.resetForm();
    }

  onClear(form: NgForm) {
    this.member = null;
    form.resetForm();
  }

  ngOnInit() {
    this.memberService.memberIsEdit.subscribe(
      (member: Member) => this.member = member
    );
  }
}
