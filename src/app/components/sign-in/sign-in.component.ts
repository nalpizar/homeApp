import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user = null;

  @Output() sendCont = new EventEmitter();
  @Output() mainUser = new EventEmitter();
  @Output() logOutUser = new EventEmitter();

  constructor(private auth: AuthService, public db: AngularFireDatabase) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
    this.mainUser.emit(this.user);
    this.logOutUser.emit(this.auth);


  }

  loginWithGoogle() {
    if (this.user == null) {
      this.auth.loginWithGoogle();
    } else {
      this.sendCont.emit(4);
      this.mainUser.emit(this.user);
      console.log(this.auth.afAuth.auth.currentUser.displayName);
    }
    let temp = setInterval(() => {    //<<<---    using ()=> syntax

      if (this.user != null) {
        this.sendCont.emit(4);
        this.mainUser.emit(this.user);

        clearInterval(temp);
      }
    }, 1000);
  }

  logOut() {
    this.auth.afAuth.auth.signOut();
  }

}
