import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from './../../models/task';
import {TaskRep} from './../../models/taskRep';
import {Day} from './../../models/day';
import {Star} from './../../models/star';
import {Score} from './../../models/score';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Input() taskRepo;
  @Input() currentUserId;
  @Input() currentDay;

  constructor() { }

  taskName:string = '';
  taskWeight:number;
  currentTask:Task = null;

  ngOnInit() {
  }

  sendTask(tempTask:Task){
    
    var newScore = new Score(1);

    let numbers =[1,2,3,4,5];

    for (let num of numbers) {

      var newStar = new Star(num,false);
      newScore.addStar(newStar)
    }
    

    var newTask = new Task(12, tempTask.getName(), 9, tempTask.getWeight(), 0, 0, newScore, this.currentUserId);
    console.log(newTask);
    this.currentDay.addTask(newTask);

    
  }


}
