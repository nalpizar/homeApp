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
    this.auth.loginWithGoogle();
    if (this.auth.afAuth.auth.currentUser != null) {
      this.sendCont.emit(4);
    } else {
      this.sendCont.emit(0);
    }
  }

  logOut () {
    this.auth.afAuth.auth.signOut();
  }  

}
