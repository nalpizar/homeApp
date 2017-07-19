import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from '../../models/day';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  @Input() days;
  @Input() taskRepo;
  @Input() currentUserId;
  
  currentDay:Day;

  constructor() { }

  ngOnInit() {
  }

  catchDay(event){
      this.currentDay = event;
      console.log(this.currentDay);
  }

}
