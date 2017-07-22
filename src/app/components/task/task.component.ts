import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task;
  @Input() day;
  @Input() index;
  @Input() users;
  @Input() currentUserId;
  myClass = 'cont';
  bgColor = '';
  color = '';
  user: User;
  sameUser = false;
  setHurry(pTask) {
    pTask.status = 3;
    this.bgColor = '#555377';
    this.color = '#ffffff';
  };

  constructor() { }

  ngOnInit() {
    if (this.task.status == 3) {
      this.bgColor = '#555377';
      this.color = '#ffffff';
    }
    console.log(this.currentUserId);

  }
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    //This event is not triggering.
    console.log('swipe');
    if (action === this.SWIPE_ACTION.RIGHT) {
      this.myClass = "cont swiperight";
    }
    if (action === this.SWIPE_ACTION.LEFT) {
      this.myClass = "cont swipeleft";

    }
  }

}
