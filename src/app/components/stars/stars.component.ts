import { Component, OnInit } from '@angular/core';
import {Star} from'../../models/star';
import {Score} from'../../models/score';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  star1 = new Star(1, false);
  star2 = new Star(2, false);
  star3 = new Star(3, false);
  star4 = new Star(4, false);
  star5 = new Star(5, false);

  rateScore(value){
    console.log(value);
  }



}
