import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { CustomHttpService } from './custom-http.service';
import { HttpmockComponent } from './httpmock/httpmock.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    LoginComponent,
    TodoFormComponent,
    HttpmockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: 'about', component:AboutComponent},
      {path: 'admin', component:AdminComponent},
      {path: 'login', component:LoginComponent},
      {path: 'user', component:UserComponent},
      {path: 'todo', component:TodoFormComponent},
      {path: 'httpmock', component:HttpmockComponent}

    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomHttpService, Http, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
