import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task;
  bgColor = '';
  color = '';
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

}
