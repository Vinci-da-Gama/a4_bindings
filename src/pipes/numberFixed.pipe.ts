import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fixedNum'
})
export class FixedNumberPipe implements PipeTransform {

    // you can set default fractions number like 2 => this is would be changed, if you input number in template
    transform(val: number, digits: number = 2) {
        return val.toFixed(digits);
    }

}