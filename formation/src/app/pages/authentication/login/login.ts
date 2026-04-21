import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styles: ``,
})
export class Login implements OnInit {

  user = { login: "", password: "" }; // A partir de version 20, utiliser SIGNALS pour les données reactives

  @ViewChild('inputpass')
  password: ElementRef | undefined;

  ngOnInit(): void {
    //this.password?.nativeElement.focus();
  }

  onLogin(login: string) {

    console.log('Login value:', login);
    console.log('Password value:', this.password?.nativeElement.value);

    this.user = { login: login, password: this.password?.nativeElement.value || "" };

    /*this.user.login = login;
    this.user.password = this.password?.nativeElement.value;*/
  }
}
