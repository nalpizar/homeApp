import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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



  constructor() { }

  ngOnInit() {

  }

  sendDay(day) {
    this.emitCurrentDay.emit(day);
  }


}
