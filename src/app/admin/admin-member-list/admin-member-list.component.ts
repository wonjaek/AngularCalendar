import { Component, OnInit } from '@angular/core';

import { Member } from '../../vo/member';
import { MemberService } from '../../httpservice/member.service';

@Component({
  selector: 'app-admin-member-list',
  templateUrl: './admin-member-list.component.html',
  providers: [MemberService]
})
export class AdminMemberListComponent implements OnInit {
  errMessage: string;
  members: Member[];
  member: Member[];
  numOfMember: number;

  constructor(private memberService: MemberService) { }

  ngOnInit() { 
    this.getMembers();
    this.getNumOfMembers();
    this.getMemberByEmail("supreme2705@gmail.com");
  }

  getMembers() {
    this.memberService.getMembers()
      .subscribe(
        members => this.members = members,
        error => this.errMessage = <any>error);
  }
  
  // getMember(id: number) {
  //   this.memberService.getMember(id)
  //     .subscribe(
  //       // member => this.member = member,
  //       member => console.log(member),
  //       error => this.errMessage = <any>error);
  // }
    public getMemberByEmail(email: string) {
        this.memberService.getMemberByEmail(email)
            .subscribe(
                member => console.log(member),
                error => this.errMessage = <any>error);
    }
  getNumOfMembers() {
    this.memberService.getMembers()
      .subscribe(
        members => this.numOfMember = members.length,
        error => this.errMessage = <any>error);
  }

  addMember(id:number, name:string, email:string, password: string){
    if (!name && !email && !password) { return; }
    this.memberService.addMember(id, name, email, password)
      .subscribe(
        member => this.members.push(member),
        error => this.errMessage = <any>error);
  }

  resultMessage: string;

  doPut(member: Member) {
    this.memberService.putMember(member)
      .subscribe(
        result => this.resultMessage = result,
        error => this.errMessage = <any>error).add(this.getMembers());
  }

  doDelete(member: Member) {
    this.memberService.delMember(member)
      .subscribe(
        result => this.resultMessage = result,
        error => this.errMessage = <any>error).add(this.getMembers());
  }
}
