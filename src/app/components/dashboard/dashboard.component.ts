import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Family } from '../../models/family';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() family;
  constructor() { }

  currentUserId:number = 1;

  ngOnInit() {
    console.log(this.family);

  }

  currentId(event){
      this.currentUserId = event;
      console.log(this.currentUserId)
  }

}
