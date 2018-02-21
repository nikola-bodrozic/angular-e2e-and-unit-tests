import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CustomHttpService } from './custom-http.service';

describe('CustomHttpService', () => {

  let service: CustomHttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomHttpService]
    });

    // inject the service
    service = TestBed.get(CustomHttpService);
    httpMock = TestBed.get(HttpTestingController);
  });
  
  it('should get the correct data from http mock', () => {
    service.getSingle().subscribe((data: any) => {
      // test fails with expect(data.title).toBe('im dummy data'); 
      expect(data.title).toBe('im mock data');
    });

    // call to jsonplaceholder.typicode.com is directed to mock
    // test fails if const req = httpMock.expectOne(service.apiUrl+'bad-string', 'call to api');
    const req = httpMock.expectOne(service.apiUrl, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
      title: 'im mock data'
    });

    httpMock.verify();
  });
});