import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toogleMenu() {
      var slide = document.getElementById('slide');
      var overlay = document.getElementById('overlay');
      slide.classList.toggle("slide-menu");
      overlay.classList.toggle("slide-overlay");
  }

}
