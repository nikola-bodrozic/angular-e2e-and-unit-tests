import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations:[HomeComponent]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });
  
  
  it('should confirm initial value',(() => {
    expect(htmlElement.textContent).toEqual('number 1');
  }));

  it('should inc - dec',(() => {
    const iniVal = component.num;
    component.inc();
    fixture.detectChanges();
    const newVal = component.num;
    expect(newVal).toBeGreaterThan(iniVal);
    component.dec();
    fixture.detectChanges();    
    const lastVal = component.num;
    expect(lastVal).toEqual(iniVal);   
  })); 
});
