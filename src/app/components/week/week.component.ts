import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from '../../models/day';
import { Task } from '../../models/task';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  @Input() days;
  @Input() taskRepo;
  @Input() users;
  @Input() currentUserId;
  @Input() currentProfile;

  currentDay: Day;
  currentTask: Task;

  constructor() { }

  ngOnInit() {
  }

  catchDay(event) {
    this.currentDay = event;
    console.log(this.currentDay);
  }

  catchTask(event) {
    this.currentTask = event;
    console.log(this.currentTask);
  }

}
