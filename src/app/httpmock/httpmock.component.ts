import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from '../custom-http.service';

@Component({
  selector: 'app-httpmock',
  template: '<h3> Data from real source are on this page. For tests see ./src/app/custom-http.service.spec.ts</h3> {{ post | json }} '
})

export class HttpmockComponent implements OnInit {

  constructor(private csh: CustomHttpService){}
  post: any;
  ngOnInit() {
    this.csh.getSingle()
    .subscribe( 
        post => {
          this.post = post;
        }
    );    
  }
}
