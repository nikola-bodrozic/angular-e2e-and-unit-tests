import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  
  title: string;
  user: {name: string};
  isLoggedIn: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    //this.user = { "name": "don" } // will fail 
    this.user = this.userService.user;
    this.title = this.userService.getTitle();
  }

}
