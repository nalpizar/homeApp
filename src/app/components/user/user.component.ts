import { Component, OnInit, Input } from '@angular/core';
import { Family } from '../../models/family';
import { User } from '../../models/user';
import { Avatar } from '../../models/avatar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user;
  @Input() family;
  star1 = "fa-star-o";
  star2 = "fa-star-o";
  star3 = "fa-star-o";
  star4 = "fa-star-o";
  star5 = "fa-star-o";
  tempTaskCont = 0;
  tempContChecked = 0;
  result = 0;

  avatarName: string;

  constructor() { }

  ngOnInit() {

    this.avatarName = "avatar" + (this.user.getAvatar()) + ".png";
    console.log(this.family)
    let temp = setInterval(() => {
      let days = this.family.getDays()
      for (let i = 0; i < days.length; i++) {
        let tasks = days[i].getTasks();
        for (let e = 0; e < tasks.length; e++) {
          if (tasks[e].getUserId() == this.user.getId()) {
            this.tempTaskCont = this.tempTaskCont + 1;
            let score = tasks[e].getScore();
            let stars = score.getStars();
            for (let j = 0; j < stars.length; j++) {
              if (stars[j].getStatus()) {
                this.tempContChecked = this.tempContChecked + 1
              }
            }
          }

        }
      }
      clearInterval(temp);
      this.tempTaskCont = this.tempTaskCont * 5;
      this.result = (this.tempContChecked * 100) / this.tempTaskCont;

      if (this.result > 0) {
        this.star1 = "fa-star";
      }
      if (this.result >= 20) {
        this.star2 = "fa-star";
      }
      if (this.result >= 40) {
        this.star3 = "fa-star";
      }
      if (this.result >= 60) {
        this.star4 = "fa-star";
      }
      if (this.result >= 80) {
        this.star5 = "fa-star";
      }
    }, 1000);

  }

}
