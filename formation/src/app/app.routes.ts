import { Routes } from '@angular/router';
import { TodoList } from './pages/todo/todo-list/todo-list';
import { TodoAdd } from './pages/todo/todo-add/todo-add';

export const routes: Routes = [
    { path: 'todos', component: TodoList },
    { path: 'todos/add', component: TodoAdd },
];
