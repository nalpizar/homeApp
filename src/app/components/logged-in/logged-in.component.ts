import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {
  @Output() sendCont = new EventEmitter();
  @Input() isNewUser;
  constructor() { }

  ngOnInit() {
    let temp = setInterval(() => {
      if (this.isNewUser == false) {
        this.sendCont.emit(4);
        clearInterval(temp);
      }
    }, 1000);

  }

  isSignIn(pCont) {
    this.sendCont.emit(pCont);
  }
}
