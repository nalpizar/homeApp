import { Component, OnInit, Input } from '@angular/core';
import {Star} from'../../models/star';
import {Score} from'../../models/score';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  constructor() { }

  @Input() task;

  ngOnInit() {
  }

  rateScore(value){

    var currentStars = this.task.getScore().getStars();

    //Reset all the values for the stars in case the user press more than one time
    for(let currentStar of currentStars){
      currentStar.setStatus(false);
    }

    switch(value) { 
      case 1: { 
          currentStars[0].setStatus(true);
          break; 
      }
      case 2: { 
          currentStars[0].setStatus(true);
          currentStars[1].setStatus(true);
          break; 
      }
      case 3: { 
          currentStars[0].setStatus(true);
          currentStars[1].setStatus(true);
          currentStars[2].setStatus(true);
          break; 
      }
      case 4: { 
          currentStars[0].setStatus(true);
          currentStars[1].setStatus(true);
          currentStars[2].setStatus(true);
          currentStars[3].setStatus(true);
          break; 
      }
      case  5: { 
          currentStars[0].setStatus(true);
          currentStars[1].setStatus(true);
          currentStars[2].setStatus(true);
          currentStars[3].setStatus(true);
          currentStars[4].setStatus(true);
          break; 
      }
    }

    console.log(currentStars);
  
}



}
