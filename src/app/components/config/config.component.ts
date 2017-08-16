import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  @Input() tasks;
  @Input() users;
  @Input() rewards;
  @Input() af;
  @Input() family;
  @Input() currentProfile;


  option: string;

  onSelect(option: string) {
    this.option = option
  }

  constructor() { }

  ngOnInit() {
    this.option = 'new_member';
  }

}
