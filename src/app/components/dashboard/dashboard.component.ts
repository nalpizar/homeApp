import { Component, OnInit, Input } from '@angular/core';
import { Family } from '../../models/family';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() family;
  constructor() { }

  ngOnInit() {
    console.log(this.family);

  }

}
