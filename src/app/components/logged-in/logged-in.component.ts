import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {
  @Output() sendCont = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  isSignIn() {
    this.sendCont.emit(4);
  }
}
