import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo-tasks',
  templateUrl: './repo-tasks.component.html',
  styleUrls: ['./repo-tasks.component.css']
})
export class RepoTasksComponent implements OnInit {
  @Input() tasks;
  constructor() { }

  ngOnInit() {
  }

}
