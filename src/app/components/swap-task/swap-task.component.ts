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
  @Input() family;
  @Input() af;
  myClass = 'cont';
  bgColor = '';
  color = '';

  @Output() sendTaskSelected = new EventEmitter;

  setHurry(pTask) {
    if (pTask.status == 4) {

      pTask.status = 3;
      this.bgColor = '#555377';
      this.color = '#ffffff';
      this.af.object('/Families/Family' + this.family.getId()).update(this.family);

    }
  };

  changeStates(pTask) {

    if (pTask.status == 3 || pTask.status == 4) {

      pTask.status = 1;
      this.bgColor = '#349B72';
      this.color = '#ffffff';


    } else {
      if (pTask.status == 1) {

        pTask.status = 2;
        pTask.swapedTo = 0;
        this.bgColor = '#9B7C34';
        this.color = '#ffffff';


      } else {
        if (pTask.status == 2) {

          pTask.status = 4;
          this.bgColor = '#ce8f5a';
          this.color = '#ffffff';


        }
      }
    };
    this.day.getTasks().sort(function (a, b) {
      return a.status - b.status;
    });
    this.af.object('/Families/Family' + this.family.getId()).update(this.family);
  };

  constructor() { }

  ngOnInit() {
    if (this.task.status == 3) {
      this.bgColor = '#555377';
      this.color = '#ffffff';
    }

    if (this.task.status == 2) {
      this.bgColor = '#9B7C34';
      this.color = '#ffffff';
    }

    if (this.task.status == 1) {
      this.bgColor = '#349B72';
      this.color = '#ffffff';
    }

    if (this.task.status == 4) {
      this.bgColor = '#fea961';
      this.color = 'rgba(255, 255, 255, 0.7)';
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
