import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-swap-user',
  templateUrl: './swap-user.component.html',
  styleUrls: ['./swap-user.component.css']
})
export class SwapUserComponent implements OnInit {
  @Input() currentTask;
  @Input() currentUserId;
  @Input() users;

  swapedToId = 0;

  constructor() { }

  ngOnInit() {
  }

  swaped() {
    let swapedTo = this.swapedToId;
    this.currentTask.setSwapedTo(swapedTo);
    console.log(this.currentTask);

  }

  onSwapedTo(event) {
    this.swapedToId = parseInt(event.target.value);
  }

}
