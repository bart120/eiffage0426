import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styles: ``,
})
export class Login implements OnInit {

  @ViewChild('inputpass')
  password: ElementRef | undefined;

  ngOnInit(): void {
    //this.password?.nativeElement.focus();
  }

  onLogin(login: string) {

    console.log('Login value:', login);
    console.log('Password value:', this.password?.nativeElement.value);
  }
}
