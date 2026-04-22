import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAdd } from './todo-add/todo-add';
import { TodoList } from './todo-list/todo-list';
import { PrimeModule } from '../../core/prime.module';
import { routes } from './todo-routes';
import { RouterModule } from '@angular/router';
import { TodosService } from '../../core/services/todos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [TodoAdd, TodoList],
  imports: [CommonModule, PrimeModule, RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
  providers: [TodosService, MessageService]
})
export class TodoModule { }
