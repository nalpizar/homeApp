import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() day;
  @Input() taskRepo;
  @Input() currentUserId;

  constructor() { }

  ngOnInit() {
  }

}
