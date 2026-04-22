import { Routes } from "@angular/router";
import { TodoList } from "./todo-list/todo-list";
import { TodoAdd } from "./todo-add/todo-add";
import { authGuard } from "../../core/guards/auth-guard";

export const routes: Routes = [
    { path: 'add', component: TodoAdd, canActivate: [authGuard] },
    { path: '', component: TodoList },
    { path: ':id', component: TodoList },

];


