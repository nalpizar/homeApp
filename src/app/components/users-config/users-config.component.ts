import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-config',
  templateUrl: './users-config.component.html',
  styleUrls: ['./users-config.component.css']
})
export class UsersConfigComponent implements OnInit {

  @Input() users;
  @Input() family;

  constructor() { }

  ngOnInit() {
  }

}
