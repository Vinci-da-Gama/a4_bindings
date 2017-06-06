import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExchangeRateService } from '../services/ExchangeRate.Service';

@Component({
    // moduleId: module.id,
    selector: 'currency-type-selector',
    template: `
        <select [ngModel]="culler" (ngModelChange)="onSelectedChange($event)">
            <option *ngFor="let currency of supportedCurrency" [value]="currency">
                {{currency}}
            </option>
        </select>
    `
})
export class CurrencySelectorComponent {

    @Input() culler:string;
    // <type> --> what type of value would be emitted.
    // have to use @Output to reset value in app.convertstyle.ts
    @Output() cullerChange = new EventEmitter<string>();

    supportedCurrency: string[];

    constructor(exRateService: ExchangeRateService) {
        this.supportedCurrency = exRateService.allSupportedCurrency;
    }

    onSelectedChange(eventVal:string) {
        // this will also change culler value.
        this.culler = eventVal;
        this.cullerChange.emit(eventVal);
    }

}