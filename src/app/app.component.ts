import { Component } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/Rx';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { Task } from './models/task';
import { User } from './models/user';
import { Reward } from './models/reward';
import { TaskRep } from './models/taskRep';
import { Week } from './models/week';
import { Family } from './models/family';
import { Avatar } from './models/avatar';
import { Day } from './models/day';
import { Skin } from './models/skin';
import { Score } from './models/score';
import { Star } from './models/star';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private family: Family;
  private showCont = 1;
  private avatars: Avatar[] = [];
  private taskRep: TaskRep[] = [];
  private skins: Skin[] = [];

  private users: User[] = [];
  private currentProfile = 1;


  user: Observable<firebase.User>;
  items: FirebaseObjectObservable<any[]>;
  msgVal: string = '';

  isDataLoaded: boolean = false;

  constructor(private http: Http, public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.object('/Families/Family' + 1);
    this.items.forEach(item => {
      this.loadFromJson(item);
    });
  }



  loadData(familyUrl: string, avatarUrl: string, skinUrl: string, pData: Family) {
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

    this.http.get(familyUrl).map(res => res.json()).subscribe((data2) => {
      //this.af.object('/Families/Family' + data.idFamily).update(data);
      //this.af.object('/Families/Family' + data.idFamily).update(this.family);
      let data = JSON.parse(JSON.stringify(pData));
      this.family = new Family(data.idFamily);


      for (var member of data.members) {
        let tempMember = new User(member.id, member.name, member.age, member.type, member.avatarId);
        tempMember.setAvatar(member.avatarId);
        tempMember.setSkin(member.skinId);
        this.family.addMembers(tempMember);


      }


      for (var taskRep of data.taskRepository) {
        let temptask = new TaskRep(taskRep.id, taskRep.name, taskRep.weight);
        this.family.addTaskRep(temptask);

      }

      for (var week of data.week) {

        let tempWeek = new Week(week.id);
        for (var day of week.days) {
          let tempDay = new Day(day.id, day.dayName);
          for (var task of day.tasks) {
            let tempScore = new Score(task.score);
            let numbers = [1, 2, 3, 4, 5];
            for (let num of numbers) {
              var newStar = new Star(num, false);
              tempScore.addStar(newStar)
            }
            let tempTask = new Task(task.id, task.name, task.position, task.weight, task.status, task.swapedTo, tempScore, task.userId);
            tempDay.addTask(tempTask);
          }
          tempWeek.addWeekDays(tempDay);
        }

        this.family.addWeek(tempWeek);


      }


      for (var reward of data.rewards) {
        let tempReward = new Reward(reward.id, reward.name, reward.awardedTo);
        this.family.addRewards(tempReward);

      }

      this.isDataLoaded = true;

      console.log(this.family);
      console.log(this.avatars);
      console.log(this.skins);
      console.log(data);
      console.log(this.family);

      //this.af.object('/Families/Family' + data.idFamily).update(this.family);

    });



  }

  loadFromJson(pData) {
    this.loadData('../assets/data/family.json', '../assets/data/avatars.json', '../assets/data/skin.json', pData);

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
