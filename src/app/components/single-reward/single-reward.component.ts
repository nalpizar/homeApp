import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-reward',
  templateUrl: './single-reward.component.html',
  styleUrls: ['./single-reward.component.css']
})
export class SingleRewardComponent implements OnInit {

  constructor() { }

  @Input() rewards;
  @Input() currentProfile;

  flag = false;


  ngOnInit() {

    for (let reward of this.rewards) {
    if(reward.getAwardedTo() == this.currentProfile){
          this.flag = true;
        }
    }
  }



}
