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
  errorName: string = "";
  errorWeight: string = "";
  isDone: string = "";

  private taskRep: TaskRep[] = [];

  title: string = '';
  weight: number = null;

  onTitleChange(event) {
    this.title = event.target.value;
  }

  onWeightChange(event) {
    this.weight = event.target.value;
  }

  addNewTask() {
    this.errorName = "";
    this.errorWeight = "";
    this.isDone = "";

    if (this.title == "") {
      this.errorName = "Please enter the task name";
    }

    if (this.weight == null) {
      this.errorWeight = "Please select a weight value";
    }
    if (this.title != "" && this.weight != null) {
      let index = this.family.getTaskRep().length;
      if (this.family.getTaskRep().length > 0) {
        index--;
        let newId = this.family.getTaskRep()[index].getId();
        newId++;
        let temptask = new TaskRep(newId, this.title, this.weight);
        this.family.addTaskRep(temptask);
      } else {

        let newId = 1;
        let temptask = new TaskRep(newId, this.title, this.weight);
        this.family.addTaskRep(temptask);
      }
      this.af.object('/Families/Family' + this.family.getId()).update(this.family);
      var resetForm = <HTMLFormElement>document.getElementById("myForm");
      resetForm.reset();
      this.title = '';
      this.weight = null;
      this.isDone = "The task has been created successfully";
    }

  }

  resetForm() {
    this.title = "";
    this.errorName = "";
    this.weight = null;
    this.errorWeight = "";
    this.isDone = "";
    var resetForm = <HTMLFormElement>document.getElementById("myForm");
    resetForm.reset();
  }

  weights: any[] = [
    { id: 1, name: '1', bgcolor: '#f1c40f' },
    { id: 2, name: '2', bgcolor: '#f39c12' },
    { id: 3, name: '3', bgcolor: '#e67e22' },
    { id: 4, name: '4', bgcolor: '#d35400' },
    { id: 5, name: '5', bgcolor: '#e74c3c' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
