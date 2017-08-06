import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() currentProfile;

  myClass = 'cont';
  bgColor = '';
  color = '';



  @Output() sendTaskSelected = new EventEmitter;

  setHurry(pTask) {
    if (pTask.status == 0) {

      pTask.status = 3;
      this.bgColor = '#555377';
      this.color = '#ffffff';

    }
  };

  changeStates(pTask) {

    if (pTask.status == 0 || pTask.status == 3) {

      pTask.status = 1;
      this.bgColor = '#349B72';
      this.color = '#ffffff';

    } else {
      if (pTask.status == 1) {

        pTask.status = 2;
        this.bgColor = '#9B7C34';
        this.color = '#ffffff';

      }else{
        if(pTask.status == 2){
          
          pTask.status = 0;
          this.bgColor = '#ce8f5a';
          this.color = '#ffffff';

        }
      }
    };

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
