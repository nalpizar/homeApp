import { Component, OnInit, Input } from '@angular/core';
import {Task} from './../../models/task';
import {TaskRep} from './../../models/taskRep';
import {Day} from './../../models/day';


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


  onSelectChange(event){ // Gets the index in the select and loops trought the taskRepo to find the task needed.
   
    var flag = event.target.value[0];
    
    for(var task of this.taskRepo){
      
      if(flag == task.getId() ){
        this.currentTask = task;
        this.taskName = this.currentTask.getName();
        this.taskWeight = this.currentTask.getWeight();
      }

    }

  }

  onDone() {

    console.log(this.taskName, this.taskWeight, this.currentUserId)
    var newTask = new Task(12, this.taskName, 9, this.taskWeight, 0, 0, null, this.currentUserId);
    console.log(newTask);
    this.currentDay.addTask(newTask);
  }


}
