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
  @Input() af;
  @Input() family;
  myClass = 'cont';
  bgcolor = '';
  constructor() { }

  ngOnInit() {
    if (this.task.getWeight() == 1) {
      this.bgcolor = '#f1c40f';
    } else if (this.task.getWeight() == 2) {
      this.bgcolor = '#f39c12';
    } else if (this.task.getWeight() == 3) {
      this.bgcolor = '#e67e22';
    } else if (this.task.getWeight() == 4) {
      this.bgcolor = '#d35400';
    } else {
      this.bgcolor = '#e74c3c';
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

  deleteTaskRep(index) {
    for (var day of this.family.getDays()) {
      let usertasks = day.getTasks()
      for (var i = usertasks.length - 1; i >= 0; i--) {
        if (usertasks[i].getId() == this.task.getId()) {
          usertasks.splice(i, 1);
        }
      }
    }
    this.tasks.splice(index, 1);
    this.af.object('/Families/Family' + this.family.getId()).update(this.family);
  }
}
