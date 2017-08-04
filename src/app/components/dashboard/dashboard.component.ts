import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Family } from '../../models/family';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() family;
  @Input() currentProfile;
  @Input() users;
  @Input() af;
  currentUserId;
  constructor() { }





  ngOnInit() {
    this.currentUserId = this.currentProfile;
    console.log(this.currentUserId);
  }


  currentId(event) {
    this.currentUserId = event;
    console.log(this.currentUserId)
  }

}
