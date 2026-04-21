import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

// provider global, pas besoin de le déclarer dans les modules
/*@Injectable({
    providedIn: 'root' // 'root' pour un provider global, 'any' pour un provider global mais avec une instance par module, null pour ne pas être global
})*/

export class TodosService {

    private http = inject(HttpClient);

    getAllTodos(): Observable<any> {
        return this.http.get(`${environment.apiTodosUrl}/todos`);
    }
}