import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';


@Component({
  selector: 'app-swap-tasks',
  templateUrl: './swap-tasks.component.html',
  styleUrls: ['./swap-tasks.component.css']
})
export class SwapTasksComponent implements OnInit {
  @Input() day;
  @Input() users;
  @Input() currentUserId;
  @Input() tasks;
  @Input() currentProfile;
  @Input() family;
  @Input() af;

  @Output() sendTaskSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  receivedTaskSelected(task: Task) {
    this.sendTaskSelected.emit(task);
  }

}
