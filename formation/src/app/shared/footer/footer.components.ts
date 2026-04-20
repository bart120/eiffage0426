import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `<div><p>Copyright &copy;2026 Eiffage</p></div>`,
    standalone: true
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}