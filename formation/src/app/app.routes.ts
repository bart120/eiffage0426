import { Routes } from '@angular/router';
import { TodoList } from './pages/todo/todo-list/todo-list';
import { TodoAdd } from './pages/todo/todo-add/todo-add';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Login } from './pages/authentication/login/login';
import { TodoModule } from './pages/todo/todo-module';

export const routes: Routes = [
    { path: '', component: Home },
    /*{ path: 'todos', component: TodoList },
    { path: 'todos/add', component: TodoAdd },*/
    { path: 'todos', loadChildren: () => TodoModule },
    { path: 'auth/login', component: Login },
    { path: '404', component: NotFound },
    { path: '**', redirectTo: '404' } //derniere route, doit être à la fin, redirige vers la page 404
];
