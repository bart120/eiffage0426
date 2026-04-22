import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { UserModel } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private http = inject(HttpClient);

    getAllUsers(): Observable<Array<UserModel>> {
        return this.http.get<Array<UserModel>>(`${environment.apiTodosUrl}/users`);
    }

    getUserById(userId: number): Observable<UserModel> {
        return this.http.get<UserModel>(`${environment.apiTodosUrl}/users/${userId}`);
    }

}