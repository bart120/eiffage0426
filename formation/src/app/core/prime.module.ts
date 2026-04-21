import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    //imports: [ButtonModule, CardModule],
    exports: [ButtonModule, CardModule, PanelModule, InputTextModule],
})
export class PrimeModule { }
