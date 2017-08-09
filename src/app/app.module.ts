import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './shared/auth.service';
import 'hammerjs';
import 'hammer-timejs';

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
export const firebaseConfig = {
  apiKey: "AIzaSyCPp31K8IjrhMDSaCNkoRNGiUa8VY2fQm8",
  authDomain: "familyapp-fdcf1.firebaseapp.com",
  databaseURL: "https://familyapp-fdcf1.firebaseio.com",
  projectId: "familyapp-fdcf1",
  storageBucket: "familyapp-fdcf1.appspot.com",
  messagingSenderId: "822973351476"
};


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeekComponent } from './components/week/week.component';
import { DayComponent } from './components/day/day.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { RewardComponent } from './components/reward/reward.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { StarsComponent } from './components/stars/stars.component';
import { ConfigComponent } from './components/config/config.component';
import { AdminRewardsComponent } from './components/admin-rewards/admin-rewards.component';
import { AdminFamilyComponent } from './components/admin-family/admin-family.component';
import { AdminTasksComponent } from './components/admin-tasks/admin-tasks.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewRewardComponent } from './components/new-reward/new-reward.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { RepoTaskComponent } from './components/./repo-task/repo-task.component';
import { RepoTasksComponent } from './components/./repo-tasks/repo-tasks.component';
import { UsersConfigComponent } from './components/./users-config/users-config.component';
import { UserConfigComponent } from './components/./user-config/user-config.component';
import { SwapUserComponent } from './components/./swap-user/swap-user.component';
import { SwapTasksComponent } from './components/./swap-tasks/swap-tasks.component';
import { SwapTaskComponent } from './components/./swap-task/swap-task.component';
import { ProfileSelectorComponent } from './components/profile-selector/profile-selector.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { RewardsConfigComponent } from './components/rewards-config/rewards-config.component';
import { RewardConfigComponent } from './components/reward-config/reward-config.component';

const appRoutes: Routes = [
  { path: '', component: SignInComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfileComponent,
    WeekComponent,
    DayComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
    RewardsComponent,
    RewardComponent,
    SignInComponent,
    UsersComponent,
    UserComponent,
    StarsComponent,
    ConfigComponent,
    AdminRewardsComponent,
    AdminFamilyComponent,
    AdminTasksComponent,
    NewUserComponent,
    NewRewardComponent,
    SignUpComponent,
    DashboardComponent,
    AddTaskComponent,
    RepoTaskComponent,
    RepoTasksComponent,
    UsersConfigComponent,
    UserConfigComponent,
    SwapUserComponent,
    SwapTasksComponent,
    SwapTaskComponent,
    ProfileSelectorComponent,
    ProfilesComponent,
    RewardsConfigComponent,
    RewardConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
