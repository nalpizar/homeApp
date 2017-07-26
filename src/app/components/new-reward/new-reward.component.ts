import { Component, OnInit, Input } from '@angular/core';
import { Reward } from '../../models/reward';

@Component({
  selector: 'app-new-reward',
  templateUrl: './new-reward.component.html',
  styleUrls: ['./new-reward.component.css']
})
export class NewRewardComponent implements OnInit {

  @Input() family;
  @Input() users;
  @Input() rewards;

  name: string = 'name';
  awardedTo: number = null;

  constructor() { }

  ngOnInit() {
  }

  addAward() {
    let index = this.rewards.length;
    console.log(index);
    index--;
    console.log(index);
    let newId = this.rewards[index].getId();
    console.log(newId);
    newId++;
    let reward = new Reward(newId, this.name, this.awardedTo);
    this.rewards.push(reward);
    console.table(this.rewards);

    this.awardedTo = null;
    this.name = 'name';
  }

  onAwardedTo(event) {
    this.awardedTo = parseInt(event.target.value);
    console.log(this.awardedTo);

  }

  onNameChange(event) {
    this.name = event.target.value;
    console.log(this.name);

  }

}
