import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @Input() af;
  @Input() family;

  private user: User[] = [];

  name: string = 'name';
  age: number = 0;
  type: string = 'family';
  avatar: number = 100;

  onNameChange(event) {
    this.name = event.target.value;
  }

  onAgeChange(event) {
    this.age = event.target.value;
  }

  addNewUser() {
    let index = this.family.getMembers().length;
    index--;
    let newId = this.family.getMembers()[index].getId();
    newId++;
    let user = new User(newId, this.name, this.age, this.type, this.avatar);
    user.setSkin(0);
    this.family.addMembers(user);
    this.name = '';
    this.af.object('/Families/Family' + this.family.getId()).update(this.family);
  }

  constructor() { }

  ngOnInit() {
  }

}
