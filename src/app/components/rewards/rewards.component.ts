import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  @Input() rewards;

  constructor() { }

  ngOnInit() {
  }

}
