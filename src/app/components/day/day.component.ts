import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() day;
  @Input() taskRepo;
  @Input() users;
  @Input() currentUserId;

  @Output() emitCurrentDay = new EventEmitter;

  currentTask = null;

  constructor() { }

  ngOnInit() {

  }

  sendDay(day) {
    this.emitCurrentDay.emit(day);
  }

  taskReceived(task: Task) {
    console.log(task);
    this.currentTask = task;
  }

}
