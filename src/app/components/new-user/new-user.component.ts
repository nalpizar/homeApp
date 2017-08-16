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
  errorName: string = "";
  errorAge: string = "";
  isDone: string = "";
  name: string = "";
  age: number = null;
  type: string = 'family';
  avatar: number = 100;

  onNameChange(event) {
    this.name = event.target.value;
  }

  onAgeChange(event) {
    this.age = event.target.value;
  }

  addNewUser() {
    this.errorName = "";
    this.errorAge = "";
    this.isDone = "";
    if (this.name == "") {
      this.errorName = "Please enter the user name";
    }

    if (this.age == null || this.age < 0) {
      this.errorAge = "Please enter the user age";
    }
    if (this.name != "" && this.age != null && this.age >= 0) {
      let index = this.family.getMembers().length;
      index--;
      let newId = this.family.getMembers()[index].getId();
      newId++;
      let user = new User(newId, this.name, this.age, this.type, this.avatar);
      user.setSkin(0);
      this.family.addMembers(user);
      this.af.object('/Families/Family' + this.family.getId()).update(this.family);
      this.name = '';
      this.age = null;
      this.isDone = "The user has been created successfully";
    }
  }

  resetForm() {
    this.name = "";
    this.errorName = "";
    this.age = null;
    this.errorAge = "";
    this.isDone = "";
  }

  constructor() { }

  ngOnInit() {
  }

}
