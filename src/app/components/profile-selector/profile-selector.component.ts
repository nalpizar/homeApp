import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile-selector',
  templateUrl: './profile-selector.component.html',
  styleUrls: ['./profile-selector.component.css']
})
export class ProfileSelectorComponent implements OnInit {

  @Input() family;
  @Input() users;
  @Input() user;

  @Output() currentProfile: EventEmitter<any> = new EventEmitter;

  recievedCurrentProfile(user:User) {
    this.currentProfile.emit(user);
  }

  constructor() { }

  ngOnInit() {
  }

}
