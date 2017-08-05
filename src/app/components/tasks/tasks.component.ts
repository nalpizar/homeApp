import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() day;
  @Input() users;
  @Input() currentUserId;
  @Input() tasks;
  @Input() currentProfile;

  @Output() sendTaskSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  receivedTaskSelected(task: Task) {
    this.sendTaskSelected.emit(task);
  }
}