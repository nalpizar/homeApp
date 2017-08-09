import { Component, OnInit, Input } from '@angular/core';
import { Reward } from '../../models/reward';

@Component({
  selector: 'app-new-reward',
  templateUrl: './new-reward.component.html',
  styleUrls: ['./new-reward.component.css']
})
export class NewRewardComponent implements OnInit {

  @Input() family;
  @Input() af;
  @Input() users;
  @Input() rewards;

  name: string = 'Reward';
  awardedTo: number = null;

  constructor() { }

  ngOnInit() {
  }

  addAward() {

    let user = false;
    if (this.rewards.length > 0) {
      for (var reward of this.rewards) {
        if (reward.getAwardedTo() == this.awardedTo) {
          user = true;
        }
      }
      if (user == false) {
        let index = this.rewards.length;
        index--;
        let newId = this.rewards[index].getId();
        newId++;
        let rewardTo = new Reward(newId, this.name, this.awardedTo);
        this.family.addRewards(rewardTo);
        this.af.object('/Families/Family' + this.family.getId()).update(this.family);
        this.awardedTo = null;
        this.name = 'Reward';
      }
    } else {
      let rewardTo = new Reward(0, this.name, this.awardedTo);
      this.family.addRewards(rewardTo);
      this.af.object('/Families/Family' + this.family.getId()).update(this.family);
      this.awardedTo = null;
      this.name = 'Reward';
    }


  }

  onAwardedTo(event) {
    this.awardedTo = parseInt(event.target.value);
  }

  onNameChange(event) {
    this.name = event.target.value;
  }

}
