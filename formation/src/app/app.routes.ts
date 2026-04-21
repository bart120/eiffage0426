import { Routes } from '@angular/router';
/*import { TodoList } from './pages/todo/todo-list/todo-list';
import { TodoAdd } from './pages/todo/todo-add/todo-add';*/
//import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
//import { Login } from './pages/authentication/login/login';
//import { TodoModule } from './pages/todo/todo-module';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    /*{ path: 'todos', component: TodoList },
    { path: 'todos/add', component: TodoAdd },*/
    { path: 'todos', loadChildren: () => import('./pages/todo/todo-module').then(m => m.TodoModule) },
    //{ path: 'auth/login', component: Login },
    { path: 'auth', loadChildren: () => import('./pages/authentication/authentication-module').then(m => m.AuthenticationModule) },
    { path: '404', component: NotFound },
    { path: '**', redirectTo: '404' } //derniere route, doit être à la fin, redirige vers la page 404
];
