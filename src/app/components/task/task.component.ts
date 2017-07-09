import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  bgColor = '';
  color = '';
  hurry = true;
  setHurry() {
    if (this.hurry) {
      this.bgColor = '#555377';
      this.color = '#ffffff';
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
