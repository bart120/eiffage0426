import { Component, OnInit, signal } from '@angular/core';
import { UserModel } from '../../core/models/user.model';
import { UsersService } from '../../core/services/users.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styles: ``
})
export class Home implements OnInit {

  protected readonly users = signal<Array<UserModel>>([]);

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(data => {
      this.users.set(data);
    });
  }

}
