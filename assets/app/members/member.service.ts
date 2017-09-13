/*
 * member.service.ts
 */

import { Http, Response, Headers } from '@angular/http';
import { Member } from  './member.model';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MemberService {
  private members: Member[] = [];
  memberIsEdit = new EventEmitter<Member>();

  constructor(private http: Http) {}

  getMembers() {
    return this.http.get('http://localhost:3333/member')
      .map((response: Response) => {
        const members =response.json().obj;
        let transformedMembers: Member[] = [];
        for (let member of members) {
          transformedMembers.push(new Member(
            // member.user.firstName,
            member.firstName,
            member._id,
            member.user._id)
          );
        }
        this.members = transformedMembers;
        return transformedMembers;
        // this creates an observable that can be subscribed to
      })
     // .catch((error: Response) => Observable.throw(error.json()));
     // .catch((error: Response) => console.log(error))
  }

  editMember(member: Member) {
    this.memberIsEdit.emit(member);
  }

  updateMessage(member: Member) {
      const body = JSON.stringify(member);
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const token = localStorage.getItem('token')
        ? '?token=' + localStorage.getItem('token')
        : '';
      return this.http.patch('http://localhost:3333/member/' + member.userId + token, body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
      // this returns an observable that can be subscribed to
  }

  deleteMember(member: Member) {
    this.members.splice(this.members.indexOf(member), 1);
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.delete('http://localhost:3333/member/' + member.userId + token)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
      // this returns an observable that can be subscribed to
  }
}
