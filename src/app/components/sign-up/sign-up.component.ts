import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../../shared/auth.service";

// import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class UserLoginComponent implements OnInit {
  @Output() sendCont = new EventEmitter();
  userForm: FormGroup;
  newUser = true; // to toggle login or signup form
  passReset = false; // set to true when password reset is triggered

  constructor(private fb: FormBuilder, public auth: AuthService,
    private router: Router) { }


  ngOnInit() {
  }



  /// Social Login

  signInWithGithub(): void {
    this.auth.githubLogin()
      .then(() => this.afterSignIn());
  }

  signInWithGoogle(): void {
    this.auth.googleLogin()
      .then(() => this.afterSignIn());
  }

  signInWithFacebook(): void {
    this.auth.facebookLogin()
      .then(() => this.afterSignIn());
  }

  signInWithTwitter(): void {
    this.auth.twitterLogin()
      .then(() => this.afterSignIn());
  }

  /// Anonymous Sign In

  signInAnonymously() {
    this.auth.anonymousLogin()
      .then(() => this.afterSignIn());
  }


  /// Shared

  private afterSignIn(): void {
    // Do after login stuff here, such router redirects, toast messages, etc.
    // this.router.navigate(['/']);
    console.log('entramosss!');
    this.sendCont.emit(4);
  }



}
