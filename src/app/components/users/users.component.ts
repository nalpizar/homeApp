import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() members;
  @Input() family;

  selectedId: number;

  constructor() {
  }


  ngOnInit() {

    this.selectedId = 1;

    this.emitId.emit(this.selectedId);
  }

  @Output() emitId = new EventEmitter;

  setUserNext() {
    this.selectedId = Number(document.getElementsByClassName("userSel item active")[0].getAttribute('id'));
    let tempIndex: number;
    tempIndex = this.members.length;
    tempIndex--;
    if (this.members[tempIndex].id == this.selectedId) {
      this.selectedId = this.members[0].id;
      this.emitId.emit(this.selectedId);
    } else {
      let tempId;
      for (let i in this.members) {
        if (this.selectedId == this.members[i].id) {
          let tempIndex = Number(i) + 1;
          tempId = this.members[Number(tempIndex)].id;
        }
      }
      this.selectedId = tempId;
      this.emitId.emit(this.selectedId);
    }
  }

  setUserPrev() {
    this.selectedId = Number(document.getElementsByClassName("userSel item active")[0].getAttribute('id'));
    let tempIndex = this.members.length;
    tempIndex--;
    if (this.selectedId == this.members[0].id) {
      this.selectedId = this.members[tempIndex].id;
      this.emitId.emit(this.selectedId);
    } else {
      let tempId;
      for (let i in this.members) {
        if (this.selectedId == this.members[i].id) {
          let tempIndex = Number(i) - 1;
          tempId = this.members[Number(tempIndex)].id;
        }
      }
      this.selectedId = tempId;
      this.emitId.emit(this.selectedId);
    }
  }

  sendSelectedId(){
    this.emitId.emit(this.selectedId);
  }


}
