import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-swap-task',
  templateUrl: './swap-task.component.html',
  styleUrls: ['./swap-task.component.css']
})
export class SwapTaskComponent implements OnInit {

  @Input() task;
  @Input() day;
  @Input() index;
  @Input() users;
  @Input() currentUserId;
  @Input() currentProfile;

  myClass = 'cont';
  bgColor = '';
  color = '';

  @Output() sendTaskSelected = new EventEmitter;

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

  sendTask() {
    this.sendTaskSelected.emit(this.task);
  }

}
