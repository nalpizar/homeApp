import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() sendCont = new EventEmitter();
  @Input() currentProfile;
  @Input() users;
  @Input() logOutUser;

  sentCont(pCont) {
    this.sendCont.emit(pCont);

  }

  constructor() { }

  ngOnInit() {

  }
  logOut() {
    console.log(this.logOutUser);
    this.sendCont.emit(0);
    this.logOutUser.afAuth.auth.signOut();
  }
  toogleMenu() {
    var slide = document.getElementById('slide');
    var overlay = document.getElementById('overlay');
    slide.classList.toggle("slide-menu");
    overlay.classList.toggle("slide-overlay");
  }



}
