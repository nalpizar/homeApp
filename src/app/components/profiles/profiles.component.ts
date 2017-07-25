import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

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
