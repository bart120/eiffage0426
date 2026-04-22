import { Routes } from "@angular/router";
import { TodoList } from "./todo-list/todo-list";
import { TodoAdd } from "./todo-add/todo-add";

export const routes: Routes = [
    { path: 'add', component: TodoAdd },
    { path: '', component: TodoList },
    { path: ':id', component: TodoList },

];


