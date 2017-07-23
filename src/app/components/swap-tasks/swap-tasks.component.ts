import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
