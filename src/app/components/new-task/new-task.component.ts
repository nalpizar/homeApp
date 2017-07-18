import { Component, OnInit, Input } from '@angular/core';
import { TaskRep } from '../../models/taskRep';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @Input() family;

  private taskRep: TaskRep[] = [];

  title:string = 'title';
  weight:number = 0;

  onTitleChange(event){
    this.title = event.target.value;
  }

  onWeightChange(event){
    this.weight = event.target.value;
  }

  addNewTask () {
    let temptask = new TaskRep( 0, this.title, this.weight );
    this.family.addTaskRep(temptask);
    this.title = 'title';
  }
 
  constructor() { }

  ngOnInit() {
  }

}
