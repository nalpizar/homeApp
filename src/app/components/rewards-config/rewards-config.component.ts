import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rewards-config',
  templateUrl: './rewards-config.component.html',
  styleUrls: ['./rewards-config.component.css']
})
export class RewardsConfigComponent implements OnInit {

  @Input() users;
  @Input() rewards;

  constructor() { }

  ngOnInit() {
  }

}
