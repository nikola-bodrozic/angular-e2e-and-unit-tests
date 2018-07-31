import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      declarations: [UserComponent],
      providers:[UserService]
    });
  }); // end foreach

  // inject UserService and assert data from service
  it('should get the user name from the true UserService', () => {
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

  // call fake getTitle function and pass its result to component
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

  //
  it('call true UserService', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = TestBed.get(UserService);
    spyOn(userService, 'getTitle').and.returnValue('My Title');
    fixture.detectChanges();
    const domValH1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(domValH1.textContent).toContain('My Title');
  });

    // test async call
    it('call latency', async(() => {
      const fixture = TestBed.createComponent(UserComponent);
      const app = fixture.debugElement.componentInstance;
      const userService = TestBed.get(UserService);
      spyOn(userService, 'getDetails').and.returnValue(Promise.resolve('Data'));
      fixture.detectChanges();
      fixture.whenStable().then( () => {
        expect(app.data).toBe('Data');
       } );
    }));
});
