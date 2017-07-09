import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Task } from './models/task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: Http) {
    this.loadFromJson();
  }


  loadData(taskUrl: string) {
    this.http.get(taskUrl).map(res => res.json()).subscribe((data) => {

      for (var tasks of data) {
        console.log(tasks.name);
      }

    });

  }

  loadFromJson() {
    this.loadData('../assets/data/tasks.json');
  }



}
