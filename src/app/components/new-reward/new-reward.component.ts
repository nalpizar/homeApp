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
  errorReward: string = "";
  errorUser: string = "";
  isDone: string = "";
  name: string = "";
  awardedTo: number = null;

  constructor() { }

  ngOnInit() {
  }

  addAward() {
    this.errorReward = "";
    this.errorUser = "";
    this.isDone = "";
    let user = false;


    if (this.name == "") {
      this.errorReward = "Please enter the reward name";
    }

    if (this.awardedTo == null) {
      this.errorUser = "Please select the user";
    }

    for (var reward of this.rewards) {
      if (reward.getAwardedTo() == this.awardedTo) {
        user = true;
        this.errorUser = "This user already received a reward";
      }
    }

    if (this.name != "" && this.awardedTo != null) {
      if (this.rewards.length > 0) {

        if (user == false) {
          let index = this.rewards.length;
          index--;
          let newId = this.rewards[index].getId();
          newId++;
          let rewardTo = new Reward(newId, this.name, this.awardedTo);
          this.family.addRewards(rewardTo);
          this.af.object('/Families/Family' + this.family.getId()).update(this.family);
          var resetForm = <HTMLFormElement>document.getElementById("myForm");
          resetForm.reset();
          this.name = "";
          this.awardedTo = null;
          this.isDone = "The reward has been created successfully";
        }
      } else {
        let rewardTo = new Reward(0, this.name, this.awardedTo);
        this.family.addRewards(rewardTo);
        this.af.object('/Families/Family' + this.family.getId()).update(this.family);
        var resetForm = <HTMLFormElement>document.getElementById("myForm");
        resetForm.reset();
        this.name = "";
        this.awardedTo = null;
        this.isDone = "The reward has been created successfully";

      }
    }
  }

  resetForm() {
    this.name = "";
    this.errorReward = "";
    this.awardedTo = null;
    this.errorUser = "";
    this.isDone = "";
    var resetForm = <HTMLFormElement>document.getElementById("myForm");
    resetForm.reset();
  }

  onAwardedTo(event) {
    this.awardedTo = parseInt(event.target.value);
  }

  onNameChange(event) {
    this.name = event.target.value;
  }

}
