import { Component, OnInit, Input } from '@angular/core';
import { Family } from '../../models/family';
import { User } from '../../models/user';
import { Avatar } from '../../models/avatar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user;
  avatarName: string;
  userSelected = null;

  constructor() { }

  ngOnInit() {
    this.avatarName = "avatar" + (this.user.getAvatar()) + ".png";
  }
}
