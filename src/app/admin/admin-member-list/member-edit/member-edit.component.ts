import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Member } from "../../../vo/member";

@Component({
  selector: 'member-edit',
  templateUrl: './member-edit.component.html'
})
export class MemberEditComponent implements OnInit {
  @Input() members: Member;
  @Output() public doPut: EventEmitter<any> = new EventEmitter();
  @Output() public doDelete: EventEmitter<any> = new EventEmitter();

  private isEdit: boolean = false;
  editedName: string;
  editedEmail: string;
  editedPassword: string;

  put(name, email, password) {
    this.members.name = this.editedName;
    this.members.email = this.editedEmail;
    this.members.password = this.editedPassword;
    this.doPut.emit(this.members);
    this.isEdit = false;
  }

  delete() {
    if (confirm("Delete?")) {
      this.doDelete.emit(this.members);
      this.isEdit = false;
    }
  }

  ngOnInit() {
    this.editedName = this.members.name;
    this.editedEmail = this.members.email;
    this.editedPassword = this.members.password;
  }
}
