import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Home-component';

  constructor() { }

  ngOnInit(): void {
  }

  isUpper = false;

  changeCase() {
    this.isUpper = !this.isUpper;
    this.title = (this.isUpper) ? new UpperCasePipe().transform(this.title) : new LowerCasePipe().transform(this.title);
  }

}
