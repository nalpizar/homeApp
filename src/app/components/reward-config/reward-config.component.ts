import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reward-config',
  templateUrl: './reward-config.component.html',
  styleUrls: ['./reward-config.component.css']
})
export class RewardConfigComponent implements OnInit {
  @Input() reward;
  @Input() index;
  @Input() rewards;
  @Input() users;
  myClass = 'cont';

  rewardedId = null;

  constructor() { }

  ngOnInit() {
    this.rewardedId = this.reward.getAwardedTo();
  }

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    //This event is not triggering.
    console.log('swipe');
    if (action === this.SWIPE_ACTION.RIGHT) {
      this.myClass = "cont swiperight";
    }
    if (action === this.SWIPE_ACTION.LEFT) {
      this.myClass = "cont swipeleft";

    }
  }

  deleteReward(index) {
    this.rewards.splice(index, 1);
  }

}
