import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';


@NgModule({
    //imports: [ButtonModule, CardModule],
    exports: [ButtonModule, CardModule, PanelModule],
})
export class PrimeModule { }
