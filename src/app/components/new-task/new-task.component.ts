import { Component, OnInit, Input } from '@angular/core';
import { TaskRep } from '../../models/taskRep';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @Input() family;
  @Input() af;

  private taskRep: TaskRep[] = [];

  title: string = 'title';
  weight: number = 0;

  onTitleChange(event) {
    this.title = event.target.value;
  }

  onWeightChange(event) {
    this.weight = event.target.value;
  }

  addNewTask() {

    let index = this.family.getTaskRep().length;

    if (this.family.getTaskRep().length > 0) {
      index--;
      let newId = this.family.getTaskRep()[index].getId();
      newId++;
      let temptask = new TaskRep(newId, this.title, this.weight);
      this.family.addTaskRep(temptask);
      this.title = 'title';

      this.af.object('/Families/Family' + this.family.getId()).update(this.family);
    } else {

      let newId = 1;
      let temptask = new TaskRep(newId, this.title, this.weight);
      this.family.addTaskRep(temptask);
      this.title = 'title';

      this.af.object('/Families/Family' + this.family.getId()).update(this.family);
    }

  }

  weights: any[] = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
