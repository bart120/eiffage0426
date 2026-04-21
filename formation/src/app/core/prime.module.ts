import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';

@NgModule({
    //imports: [ButtonModule, CardModule],
    exports: [ButtonModule, CardModule, PanelModule, InputTextModule, MessageModule, TableModule, SelectModule],
})
export class PrimeModule { }
