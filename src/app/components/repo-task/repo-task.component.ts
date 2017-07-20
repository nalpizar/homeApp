import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo-task',
  templateUrl: './repo-task.component.html',
  styleUrls: ['./repo-task.component.css']
})
export class RepoTaskComponent implements OnInit {
  @Input() task;
  @Input() index;
  @Input() tasks;
  myClass = 'cont';
  constructor() { }

  ngOnInit() {
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

  deleteTaskRep(index) {
    this.tasks.splice(index, 1);
  }



}
