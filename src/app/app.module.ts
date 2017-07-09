import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
