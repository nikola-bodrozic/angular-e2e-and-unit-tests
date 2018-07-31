# Angular 5 Tests 

## install

run `npm install` to install dependancies, `ng serve` open browser at `http://localhost:4200/`. 
make sure that you run @angular/cli@6.0.8 globaly higher version give error.

## Unit Tests

Run `ng test` to execute the unit tests

Tests are in **home.component.spec.ts**. In spec file clicking on + and - buttons is simulated and number of clicks is asserted.

Other set of tests is in **user.component.spec.ts**.  There are:
* accessing the template DOM
* inject UserService and assert data from service
* call fake function that replaces method from service and passes its result to component

Testing form in **TodoFormComponent**
* confirms that tags exist
* confirms that tag name must not be empty

Testing **custom-http.service.spec.ts** shows how to use mock http

## e2e tests - end to end tests with protractor

Run `ng e2e`. The files are `e2e/app.po.ts` & `e2e/app.e2e-spec.ts`. 

On **LoginComponent** following events are simulated by ChromeDriver
* open home page
* click on login link
* enter right credentials
* submit form by clicking button
* redirect to admin

On **LoginComponent** workflow with invalid credentials
* open home page
* click on login link
* enter bad credentials
* submit by calling form method 
* display message wrong credentials

On **TodoFormComponent** test trigers validation message in span element






