import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') registrationForm: NgForm;
  wrongCred:boolean;
    constructor(
      private router: Router, 
      private route: ActivatedRoute
    ) { }
    
    ngOnInit() {
    }
    
    onSubmit(param){
      if(param.username == "test" && param.password == "123"){
        this.router.navigate(['/admin']);
      } else {
        this.wrongCred = true;
      }
    }
}
/*
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
    @ViewChild('loginForm') registrationForm: NgForm;
  
    constructor(
      private router: Router, 
      private route: ActivatedRoute
    ) { }
    
    ngOnInit() {
    }
    
    onSubmit(param){
      if(param.username == "test" && param.email=="me@example.com"){
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/login']);
      }
    }
}

*/