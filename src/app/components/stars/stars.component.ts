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

  emptyStar = true;
  emptyStar2 = true; 
  emptyStar3 = true; 
  emptyStar4 = true; 
  emptyStar5 = true;

  

  setStar1(){
      let classes = {
          "fa-star-o": this.emptyStar,
          "fa-star": !this.emptyStar
      };
      return classes;
  }

  setStar2(){
      let classes = {
          "fa-star-o": this.emptyStar2,
          "fa-star": !this.emptyStar2
      };
      return classes;
  }

  setStar3(){
      let classes = {
          "fa-star-o": this.emptyStar3,
          "fa-star": !this.emptyStar3
      };
      return classes;
  }

  setStar4(){
      let classes = {
          "fa-star-o": this.emptyStar4,
          "fa-star": !this.emptyStar4
      };
      return classes;
  }

  setStar5(){
      let classes = {
          "fa-star-o": this.emptyStar5,
          "fa-star": !this.emptyStar5
      };
      return classes;
  }




  rateScore(value){

    var currentStars = this.task.getScore().getStars();

    //Reset all the values for the stars in case the user press more than one time
    for(let currentStar of currentStars){
      currentStar.setStatus(false);
    }

    this.emptyStar = true;
    this.emptyStar2 = true;
    this.emptyStar3 = true;
    this.emptyStar4 = true;
    this.emptyStar5 = true;
    

    switch(value) { 
      case 1: { 
          currentStars[0].setStatus(true);
          this.emptyStar = false;

          break; 
      }
      case 2: { 
          currentStars[0].setStatus(true);
          currentStars[1].setStatus(true);
          this.emptyStar = false;
          this.emptyStar2 = false;

          break; 
      }
      case 3: { 
          currentStars[0].setStatus(true);
          currentStars[1].setStatus(true);
          currentStars[2].setStatus(true);
          this.emptyStar = false;
          this.emptyStar2 = false;
          this.emptyStar3 = false;
          break; 
      }
      case 4: { 
          currentStars[0].setStatus(true);
          currentStars[1].setStatus(true);
          currentStars[2].setStatus(true);
          currentStars[3].setStatus(true);
          this.emptyStar = false;
          this.emptyStar2 = false;
          this.emptyStar3 = false;
          this.emptyStar4 = false;

          break; 
      }
      case  5: { 
          currentStars[0].setStatus(true);
          currentStars[1].setStatus(true);
          currentStars[2].setStatus(true);
          currentStars[3].setStatus(true);
          currentStars[4].setStatus(true);
          this.emptyStar = false;
          this.emptyStar2 = false;
          this.emptyStar3 = false;
          this.emptyStar4 = false;
          this.emptyStar5 = false;

          break; 
      }
    }

    console.log(currentStars);
  
}



}
