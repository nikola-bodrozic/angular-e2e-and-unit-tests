import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder);
  });

  it('has name & email input tags', () => {
    expect(component.sform.contains('name')).toBeTruthy();
    expect(component.sform.contains('description')).toBeTruthy();
  });

  it('has empty name tag', () => {
    const name = component.sform.get('name');
    name.setValue('');
    expect(name.valid).toBeFalsy();
  });
}); 