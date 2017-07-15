import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
      var nav = document.getElementById('nav');
      if (nav.style.display === 'none') {
          nav.style.display = 'block';
      } else {
          nav.style.display = 'none';
      }
  }

  hideMenu() {
    var nav = document.getElementById('nav');
    nav.style.display = 'none';
      
  }

}
