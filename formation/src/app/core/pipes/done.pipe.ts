import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'done',
    standalone: false
})
export class DonePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if (value === true)
            return 'Fait';
        return 'Non fait';

    }
}