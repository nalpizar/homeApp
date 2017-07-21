import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() members;
  @Input() family;
  selectedId: number = 1;

  constructor() {
  }


  ngOnInit() {

    this.emitId.emit(this.selectedId);


  }

  @Output() emitId = new EventEmitter;

  setUserNext() {

    if (this.members.length == this.selectedId) {
      this.selectedId = Number(document.getElementsByClassName("userSel item active")[0].getAttribute('title'));
      this.selectedId = 1;
      this.emitId.emit(this.selectedId);
    } else {
      this.selectedId = Number(document.getElementsByClassName("userSel item active")[0].getAttribute('title'));
      this.selectedId++;
      this.emitId.emit(this.selectedId);
    }
  }

  setUserPrev() {
    if (this.selectedId == 1) {
      this.selectedId = Number(document.getElementsByClassName("userSel item active")[0].getAttribute('title'));
      this.selectedId = this.members.length;
      this.emitId.emit(this.selectedId);
    } else {
      this.selectedId = Number(document.getElementsByClassName("userSel item active")[0].getAttribute('title'));
      this.selectedId--;
      this.emitId.emit(this.selectedId);
    }
  }



}
