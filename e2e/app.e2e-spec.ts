import { AppPage } from './app.po';
import { by, browser, element } from 'protractor';

describe('reactive-forms App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // should submit form with valid credentials on login
  it('should submit form with valid credentials on login', () => {
    // go to home page
    page.navigateTo();

    // click on about link
    element(by.css('[routerLink = "/login"]')).click();
    browser.sleep(2000);

    // set username and password
    browser.sleep(2000);    
    element(by.id('username')).sendKeys('test');
    browser.sleep(2000);
    element(by.id('password')).sendKeys('123');  
    browser.sleep(2000);
    // submit by calling method   
    // var login_form = element(by.id('login'));
    // login_form.submit();

    // submit by clicking button
    element(by.id('submit')).click();

    expect( element(by.css('app-admin p')).getText() ).toContain('admin');
    browser.sleep(2000);  
  });  

  // should submit form with invalid credentials on login
  it('should submit form with invalid credentials on login', () => {
    page.navigateTo();
    element(by.css('[routerLink = "/login"]')).click();
    browser.sleep(2000);
    element(by.id('username')).sendKeys('wrong-username');
    browser.sleep(2000);
    element(by.id('password')).sendKeys('123');
    browser.sleep(2000);    
    var login_form = element(by.id('login'));
    login_form.submit();   
    expect( element(by.css('app-login h1')).getText() ).toContain('Wrong credentials');
    browser.sleep(2000);  
  });

  // should show validation message that empty name not allowed
  it('should show validation message that empty name not allowed', () => {
    page.navigateTo();
    element(by.css('[routerLink = "/todo"]')).click();
    browser.sleep(2000);
    element(by.id('name')).sendKeys('');
    browser.sleep(2000);
    element(by.id('description')).sendKeys('me@example.com');
    browser.sleep(2000);    
    var login_form = element(by.id('myform'));
    login_form.submit();   
    browser.sleep(2000);     
    expect( element(by.id('errmsg')).getText() ).toContain('name is required!');
    browser.sleep(2000);     
  });
});
