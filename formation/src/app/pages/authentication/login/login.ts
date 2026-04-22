import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styles: ``,
})
export class Login implements OnInit {

  //user = { login: "", password: "" }; // A partir de version 20, utiliser SIGNALS pour les données reactives

  private readonly authService = inject(AuthService);

  isError = signal(false);

  @ViewChild('inputpass')
  password: ElementRef | undefined;

  ngOnInit(): void {
    //this.password?.nativeElement.focus();
  }

  onLogin(login: string) {
    this.isError.set(false);
    //console.log('Login value:', login);
    //console.log('Password value:', this.password?.nativeElement.value);

    this.authService.login(login, this.password?.nativeElement.value || "").subscribe(data => {
      if (!data) {
        console.log(data);
        //this.user = { login: login, password: this.password?.nativeElement.value || "" };
        this.isError.set(true);
      }
    });

    /*this.user.login = login;
    this.user.password = this.password?.nativeElement.value;*/
  }
}
