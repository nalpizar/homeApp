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
  }

  prevUser() {
    if (this.selectedId > 1) {
      this.selectedId--;
    } else {
      return false;
    }
  }

  nextUser() {
    if (this.selectedId < (this.members.length)) {
      this.selectedId++;
    } else {
      return false;
    }
  }
}
