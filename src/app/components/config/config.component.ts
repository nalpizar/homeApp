import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  @Input() tasks;
  @Input() family;

  option: string;

  onSelect(option: string) {
    this.option = option
  }

  constructor() { }

  ngOnInit() {
  }

}
