import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  num:number;
  
  constructor() {
    this.num = 1;
  }

  ngOnInit() {
  }

  inc(){
    this.num++;
  }

  dec(){
    this.num--;
  }
}
