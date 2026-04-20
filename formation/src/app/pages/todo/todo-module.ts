import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAdd } from './todo-add/todo-add';
import { TodoList } from './todo-list/todo-list';
import { PrimeModule } from '../../core/prime.module';

@NgModule({
  declarations: [TodoAdd, TodoList],
  imports: [CommonModule, PrimeModule],
})
export class TodoModule { }
