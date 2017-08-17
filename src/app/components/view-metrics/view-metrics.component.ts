import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-metrics',
  templateUrl: './view-metrics.component.html',
  styleUrls: ['./view-metrics.component.css']
})
export class ViewMetricsComponent implements OnInit {
  @Input() family;
  @Input() af;
  wValue: number = 0;
  prog: number = 0;
  constructor() { }

  ngOnInit() {
    let temp = setInterval(() => {
      let days = this.family.getWeek()[0].getWeekDays();
      let tempTaskCont = 0;
      let tempContDone = 0;
      for (let i = 0; i < days.length; i++) {
        let tasks = days[i].getTasks();
        tempTaskCont = tempTaskCont + tasks.length;
        for (let e = 0; e < tasks.length; e++) {
          if (tasks[e].getStatus() == 2) {
            tempContDone = tempContDone + 1;
          }
        }
      }
      console.log(tempTaskCont);
      console.log(tempContDone);
      this.wValue = (tempContDone * 100) / tempTaskCont;

      let temp2 = setInterval(() => {
        if (this.prog >= this.wValue) {
          clearInterval(temp2);
        } else { this.prog = this.prog + 1; }

      }, 25);
      //this.wValue = 60;
      clearInterval(temp);
    }, 1000);



  }

}
