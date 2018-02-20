import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  template: `
  <h1>To Do</h1>
  <form [formGroup]="sform"  (ngSubmit)="onSubmit()" id="myform">

    <input type="text" id="name"  formControlName="name" class="form-control">
    <span id="errmsg" *ngIf="!sform.get('name').valid && sform.get('name').touched">name is required!</span>

    <input type="text" id="description"  formControlName="description" class="form-control">

    <button type="submit">Submit</button>
  </form>
  `,
  styles: [`
    span {color:red;}
  `]
})
export class TodoFormComponent  {

  sform: FormGroup;
  constructor(fb: FormBuilder) {
    this.sform = fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  onSubmit() {
    console.log(this.sform);
  }
} 