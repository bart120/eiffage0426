import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';
import { RouterModule } from '@angular/router';
import { routes } from './authentication-routes';
import { PrimeModule } from '../../core/prime.module';

@NgModule({
  declarations: [Login],
  imports: [CommonModule, RouterModule.forChild(routes), PrimeModule],
  exports: [RouterModule]
})
export class AuthenticationModule { }
