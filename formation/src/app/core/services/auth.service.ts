import { computed, inject, Injectable, Signal, signal } from "@angular/core";
import { UserModel } from "../models/user.model";
import { map, Observable } from "rxjs";
import { UsersService } from "./users.service";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly usersService = inject(UsersService);
    private readonly rooter = inject(Router);

    private readonly user = signal<UserModel>({ id: 0, name: '' });

    isConnected: Signal<boolean> = computed(() => this.user().id !== 0);

    constructor() {
        const userData = sessionStorage.getItem('user');
        if (userData) {
            this.user.set(JSON.parse(userData));
        }
    }


    getUserSignal() {
        return this.user;
    }

    login(login: string, password: string): Observable<boolean> {
        // Appel à une API pour vérifier les identifiants
        return this.usersService.getUserByMail(login).pipe<boolean>(
            map(data => {
                if (data !== null) {
                    this.user.set(data);
                    sessionStorage.setItem('user', JSON.stringify(data));
                    console.log('isConnected:', this.isConnected());
                    return true;
                }
                return false;
            })
        );
    }

    logout() {
        this.user.set({ id: 0, name: '' });
        sessionStorage.removeItem('user');
        this.rooter.navigate(['/']);
    }

}