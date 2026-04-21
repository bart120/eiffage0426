import { Component, OnInit, signal } from '@angular/core';
import { TodosService } from '../../../core/services/todos.service';
import { TodoModel } from '../../../core/models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.html',
  styles: ``,
})
export class TodoList implements OnInit {

  protected readonly todos = signal<Array<TodoModel>>([]);


  constructor(private todosService: TodosService) {

  }

  ngOnInit(): void {
    this.todosService.getAllTodos().subscribe(data => {
      this.todos.set(data);
    });


  }
}
