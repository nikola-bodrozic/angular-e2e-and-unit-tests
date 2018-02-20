import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
  }); // end foreach

  // inject UserService and assert data from service
  it('should use the user name from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });  

  // accessing the template DOM
  it('should display the user name if user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  //  accessing the template DOM
  it('shouldn\'t display the user name if user is not logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });  

  // call fake function and pass its result to component
  it('plant fake getTitle function', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;  
    let userService = fixture.debugElement.injector.get(UserService); 
    let spy = spyOn(userService, 'getTitle').and.callFake( () => {
      return "Mein Titlen";
    });  
    app.ngOnInit();
    // expect(app.title).toContain('du moua'); // will fail 
    expect(app.title).toContain('Mein');  
  });

});
