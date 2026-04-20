import { Component, OnInit } from '@angular/core';
import { PrimeModule } from '../../core/prime.module';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink } from "@angular/router";


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    standalone: true,
    imports: [MenubarModule, RouterLink, PrimeModule]
})

export class MenuComponent implements OnInit {

    items: MenuItem[] | undefined;

    constructor() { }

    ngOnInit() {
        this.items = [
            {
                label: 'ACCUEIL',
                icon: 'pi pi-home',
                routerLink: '/'
            },
            {
                label: 'TODOS',
                icon: 'pi pi-list',
                items: [
                    {
                        label: 'Liste',
                        icon: 'pi pi-list',
                        routerLink: '/todos'
                    },
                    {
                        label: 'Ajouter',
                        icon: 'pi pi-plus',
                        routerLink: '/todos/add'
                    }
                ]
            },
            {
                label: 'A PROPOS',
                icon: 'pi pi-info',
                routerLink: '/about'
            }

        ];
    }
}