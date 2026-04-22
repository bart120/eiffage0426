import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { TodoModel } from "../models/todo.model";

// provider global, pas besoin de le déclarer dans les modules
/*@Injectable({
    providedIn: 'root' // 'root' pour un provider global, 'any' pour un provider global mais avec une instance par module, null pour ne pas être global
})*/

export class TodosService {

    private http = inject(HttpClient);

    getAllTodos(): Observable<Array<TodoModel>> {
        return this.http.get<Array<TodoModel>>(`${environment.apiTodosUrl}/todos`);
    }

    getTodosByUserId(userId: number): Observable<Array<TodoModel>> {
        //1
        return this.http.get<Array<TodoModel>>(`${environment.apiTodosUrl}/todos?userId=${userId}`);
    }

    addToto(todo: TodoModel): Observable<TodoModel> {
        return this.http.post<TodoModel>(`${environment.apiTodosUrl}/todos`, todo);
    }
}