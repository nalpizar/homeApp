import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @Input() family;

  private user: User[] = [];

  name: string = 'name';
  age: number = 0;
  type: string = 'family';
  avatar: number = 0;

  onNameChange(event) {
    this.name = event.target.value;
  }

  onAgeChange(event) {
    this.age = event.target.value;
  }

  addNewUser() {
    let user = new User(0, this.name, this.age, this.type, this.avatar);
    this.family.addMembers(user);
    this.name = 'name';
    console.table(this.family.getMembers());
  }

  constructor() { }

  ngOnInit() {
  }

}
