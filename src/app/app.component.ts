import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Task } from './models/task';
import { User } from './models/user';
import { Reward } from './models/reward';
import { TaskRep } from './models/taskRep';
import { Week } from './models/week';
import { Family } from './models/family';
import { Avatar } from './models/avatar';
import { Day } from './models/day';
import { Skin } from './models/skin';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private family;
  private showCont = 4;
  private avatars: Avatar[] = [];
  private taskRep: TaskRep[] = [];
  private skins: Skin[] = [];

  private users: User[] = [];
  private currentProfile = 1;

  isDataLoaded: boolean = false;

  constructor(private http: Http) {
    this.loadFromJson();
  }

  loadData(familyUrl: string, avatarUrl: string, skinUrl: string) {
    this.http.get(avatarUrl).map(res => res.json()).subscribe((data) => {
      for (var avatar of data) {
        let tempAvatar = new Avatar(avatar.avatarId, avatar.nombre, avatar.url);
        this.avatars.push(tempAvatar);
      }
    });

    this.http.get(skinUrl).map(res => res.json()).subscribe((data) => {
      for (var skin of data) {
        let tempSkin = new Skin(skin.id, skin.skinName, skin.skinColor);
        this.skins.push(tempSkin);
      }
    });

    this.http.get(familyUrl).map(res => res.json()).subscribe((data) => {
      this.family = new Family(data.idFamily);

      for (var member of data.members) {
        let tempMember = new User(member.id, member.name, member.age, member.type, member.avatar);
        tempMember.setAvatar(member.avatarId);
        tempMember.setSkin(member.skinId);
        this.family.members.push(tempMember);

      }


      for (var taskRep of data.taskRepository) {
        let temptask = new TaskRep(taskRep.id, taskRep.name, taskRep.weight);
        this.family.taskRepository.push(temptask);
      }

      for (var week of data.week) {

        let tempWeek = new Week(week.weekId);
        for (var day of week.days) {
          let tempDay = new Day(day.id, day.dayName);
          for (var task of day.tasks) {
            let tempTask = new Task(task.id, task.name, task.position, task.weight, task.status, task.swapedTo, task.score, task.userid);
            tempDay.addTask(tempTask);
          }
          tempWeek.addWeekDays(tempDay);
        }

        this.family.week.push(tempWeek);

      }


      for (var reward of data.rewards) {
        let tempReward = new Reward(reward.id, reward.name, reward.awardedTo);
        this.family.rewards.push(tempReward);
      }

      this.isDataLoaded = true;

      console.log(this.family);
      console.log(this.avatars);
      console.log(this.skins);

    });

  }

  loadFromJson() {
    this.loadData('../assets/data/family.json', '../assets/data/avatars.json', '../assets/data/skin.json');

  }

  recievedCurrentProfile(user) {
    this.currentProfile = user;
  }

  showContent(pcont) {
    this.showCont = pcont;
  }

  recievedCont(cont) {
    this.showCont = cont;
  }



}
