import { Component, OnInit, signal } from '@angular/core';
import { TodosService } from '../../../core/services/todos.service';
import { TodoModel } from '../../../core/models/todo.model';
import { UserModel } from '../../../core/models/user.model';
import { UsersService } from '../../../core/services/users.service';
import { SelectChangeEvent } from 'primeng/select';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.html',
  styles: ``,
})
export class TodoList implements OnInit {

  protected readonly todos = signal<Array<TodoModel>>([]);
  protected readonly users = signal<Array<UserModel>>([]);

  usersMap = new Map<number, Observable<UserModel>>();

  constructor(private todosService: TodosService, private usersService: UsersService) {

  }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(data => {
      this.users.set(data);
    });

    this.todosService.getAllTodos().subscribe(data => {
      this.todos.set(data);
    });
  }

  onChangeUser(event: SelectChangeEvent): void {
    const userId = event.value.id;
    this.todosService.getTodosByUserId(userId).subscribe(data => {
      this.todos.set(data);
    });
  }

  getUserById(userId: number): Observable<UserModel> {
    if (!this.usersMap.has(userId)) {
      this.usersMap.set(userId, this.usersService.getUserById(userId).pipe(shareReplay(1)));
    }
    return this.usersMap.get(userId)!;
  }

}
