import { Component, OnInit } from '@angular/core';
import { PrimeModule } from '../../core/prime.module';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    standalone: true,
    imports: [PrimeModule]
})

export class MenuComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}