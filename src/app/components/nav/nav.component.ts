import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from "../../shared/auth.service";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() sendCont = new EventEmitter();
  @Input() currentProfile;
  @Input() users;
  @Input() rewards;

  sentCont(pCont) {
    this.sendCont.emit(pCont);
  }

  constructor(public auth: AuthService) { }

  ngOnInit() {

  }

  logout() {
    this.auth.signOut();
    this.sendCont.emit(0);
    location.reload();
  }

  toogleMenu() {
    var slide = document.getElementById('slide');
    var overlay = document.getElementById('overlay');
    slide.classList.toggle("slide-menu");
    overlay.classList.toggle("slide-overlay");
  }

}
