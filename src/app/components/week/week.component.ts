import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  @Input() days;
  @Input() taskRepo;
  @Input() currentUserId;

  constructor() { }

  ngOnInit() {
  }

}
