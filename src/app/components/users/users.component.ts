import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Family } from '../../models/family';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() members;

  selectedId: number;

  constructor() {
  }

  ngOnInit() {
    this.selectedId = 1;
    this.emitId.emit(this.selectedId);
  }

  @Output() emitId = new EventEmitter;

  prevUser() {
    if (this.selectedId > 1) {
      this.selectedId--;
      this.emitId.emit(this.selectedId);
    } else {
      return false;
    }
  }

  nextUser() {
    if (this.selectedId < (this.members.length)) {
      this.selectedId++;
      this.emitId.emit(this.selectedId);
    } else {
      return false;
    }
  }

}
