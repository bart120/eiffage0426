import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoList } from './todo-list';
import { SelectModule } from 'primeng/select';
import { PrimeModule } from '../../../core/prime.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TodoList', () => {
  let component: TodoList;
  let fixture: ComponentFixture<TodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, PrimeModule,
        FormsModule, ReactiveFormsModule],
      declarations: [TodoList],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(TodoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
