import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomHttpService {
  apiUrl = 'http://jsonplaceholder.typicode.com/posts/1';
  constructor(private httpClient: HttpClient) { }
  getSingle() {
    return this.httpClient.get(this.apiUrl);
  }
}
