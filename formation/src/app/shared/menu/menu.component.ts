import { Component, OnInit } from '@angular/core';
import { PrimeModule } from '../../core/prime.module';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    standalone: true,
    imports: [PrimeModule, MenubarModule]
})

export class MenuComponent implements OnInit {

    items: MenuItem[] | undefined;

    constructor() { }

    ngOnInit() {
        this.items = [
            {
                label: 'ACCUEIL',
                icon: 'pi pi-home'
            },
            {
                label: 'TODOS',
                icon: 'pi pi-list',
                items: [
                    {
                        label: 'Liste',
                        icon: 'pi pi-list'
                    },
                    {
                        label: 'Ajouter',
                        icon: 'pi pi-plus'
                    }
                ]
            },
            {
                label: 'A PROPOS',
                icon: 'pi pi-info'
            }

        ];
    }
}