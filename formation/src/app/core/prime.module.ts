import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { DonePipe } from './pipes/done.pipe';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [DonePipe],
    //imports: [ButtonModule, CardModule],
    exports: [ButtonModule, CardModule, PanelModule, InputTextModule, MessageModule, TableModule, SelectModule,
        DonePipe, CheckboxModule, ListboxModule, ToastModule
    ],
})
export class PrimeModule { }
