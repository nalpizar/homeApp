import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output() sendCont = new EventEmitter();
  @Input() user;
  @Input() users;
  @Output() currentProfile = new EventEmitter;

  sendCurrentProfile() {
    this.currentProfile.emit(this.user.id);
    this.sendCont.emit(1);
  }


  constructor() { }

  ngOnInit() {

  }

}
