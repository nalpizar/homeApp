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

  constructor(private auth: AuthService, public db: AngularFireDatabase) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
  }

  loginWithGoogle() {
    console.log(this.user)
    if (this.user == null) {
      this.auth.loginWithGoogle();
    } else {
      this.sendCont.emit(4);
    }
    let temp = setInterval(() => {    //<<<---    using ()=> syntax
      console.log(this.user)
      if (this.user != null) {
        this.sendCont.emit(4);
        clearInterval(temp);
      }
    }, 1000);
  }

  logOut() {
    this.auth.afAuth.auth.signOut();
    console.log(this.user)
  }

}
