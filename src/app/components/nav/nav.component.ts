import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() sendCont = new EventEmitter();

  sentCont(pCont) {
      this.sendCont.emit(pCont);
  }

  @Input() currentProfile;
  @Input() users;


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
