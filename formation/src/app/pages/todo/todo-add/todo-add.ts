import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../../core/models/user.model';
import { UsersService } from '../../../core/services/users.service';
import { TodoModel } from '../../../core/models/todo.model';
import { TodosService } from '../../../core/services/todos.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-todo-add',
  standalone: false,
  templateUrl: './todo-add.html',
  styles: ``,
})
export class TodoAdd implements OnInit {

  private usersService = inject(UsersService);
  private todosService = inject(TodosService);
  private router = inject(Router);
  private message = inject(MessageService);

  protected readonly users = signal<Array<UserModel>>([]);

  formTodo = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl<boolean>(false),
    userId: new FormControl<number>(0, [Validators.min(1)]),
  });

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(users => {
      this.users.set(users);
    });
  }

  onSubmit(): void {
    if (this.formTodo.invalid) {
      this.formTodo.markAllAsDirty();
      return;
    }
    //    console.log(this.formTodo.value);
    const todo: TodoModel = { id: -1, ...this.formTodo.value } as TodoModel;
    //console.log(todo);
    this.todosService.addToto(todo).subscribe(data => {
      this.message.add({ severity: 'success', summary: 'Succès', detail: `Todo ajouté avec l'id ${data.id}` });
      //this.formTodo.reset();
      this.router.navigate(['/todos', todo.userId]);
    });
  }

}
