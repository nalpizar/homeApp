import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-tasks',
  templateUrl: './admin-tasks.component.html',
  styleUrls: ['./admin-tasks.component.css']
})
export class AdminTasksComponent implements OnInit {
  @Input() tasks;
  constructor() { }

  ngOnInit() {
  }

}
