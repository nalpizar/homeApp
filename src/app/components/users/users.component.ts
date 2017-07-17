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

  constructor() {
  }

  ngOnInit() {
  }
}
