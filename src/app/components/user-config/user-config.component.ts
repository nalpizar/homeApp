import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.css']
})
export class UserConfigComponent implements OnInit {
  @Input() user;
  @Input() index;
  @Input() users;
  @Input() family;
  @Input() currentProfile;
  @Input() af;
  myClass = 'cont';

  constructor() { }

  ngOnInit() {
  }

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    //This event is not triggering.
    console.log(this.index);
    if (this.index > 0) {
      if (action === this.SWIPE_ACTION.RIGHT) {
        this.myClass = "cont swiperight";
      }
      if (action === this.SWIPE_ACTION.LEFT) {
        this.myClass = "cont swipeleft";

      }
    }
  }

  deleteUser(index) {

    for (var day of this.family.getDays()) {
      let tasks = day.getTasks()
      for (var i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i].getSwapedTo() == this.user.getId()) {
          tasks[i].setSwapedTo(0);
        }
        if (tasks[i].getUserId() == this.user.getId()) {
          day.deleteTask(i);
        }

      }
    }
    this.users.splice(index, 1);
    this.af.object('/Families/Family' + this.family.getId()).update(this.family);
  }

}
