import { Component } from '@angular/core';
import { ExchangeRateService } from './services/ExchangeRate.Service';

@Component({
	selector: 'converter-with-style',
    providers: [ExchangeRateService],
	template: `
        L30: <span>class binding - [class.error]="..."<span>
		<br />
		Convert: <input type="number" [(ngModel)]="baseAmt" [class.error]="inFinite(baseAmt)" /> USD
        <br />
		<p class="simple-hint">
            This is demo for (style) => [style.cssAttribute] = "..."
        </p>
        <input type="number" [(ngModel)]="baseAmt" 
        [style.backgroundColor]="inFinite(baseAmt)? '#ff6666':'#fff' " /> 
        USD
		<p>
			<b>{{baseAmt}}</b> US dollars =
			<cite>{{getterTargetAmt}}</cite> GRP
		</p>
        L30: (7: 33) <span>ngClass binding with multiple condidions.<span>
		<br />
		Convert: 
        <input type="number" [(ngModel)]="baseAmt0" [ngClass]="{error: inInvalid(baseAmt0), warning: baseAmt0 < 0}" /> 
        USD
		<p>
			<b>{{baseAmt0}}</b> US dollars =
			<cite>{{getterTargetAmt0}}</cite> GRP
		</p>
        L31: <span>Services with provider  --- get exchange rate from service <span>
		<br />
		Convert: 
        <input type="number" [(ngModel)]="baseAmt1" /> {{baseCurrency}} = 
        <cite>{{getterTargetAmt1}}</cite> {{targetCurrency}}
    `,
	styles: [
		`
			input[type="number"] {
				width: 10ex;
				text-align: right;
			}
            .error {
                background-color: red;
            }
            .warning {
                background-color: orange;
            }
            .simple-hint {
                color: blue;
                font-weight: 900;
            }
		`
	]
})
export class ConverterStyle {
    exchangeRate:number = 0.7;
    baseAmt:number = 1;

    exchangeRate0:number = 0.66;
    baseAmt0:number = 1;

    baseCurrency: string = 'USD';
    targetCurrency: string = 'GBP';
    baseAmt1:number = 1;

    constructor ( private ers: ExchangeRateService ) {}

    get getterTargetAmt() {
        return this.baseAmt * this.exchangeRate;
    }

    get getterTargetAmt0() {
        return this.baseAmt0 * this.exchangeRate0;
    }

    get getterTargetAmt1() {
        const exchangeRate1: number = this.ers.fetchExchangeRate(this.baseCurrency, this.targetCurrency);
        return this.baseAmt1 * exchangeRate1;
    }

    inFinite(val: number) {
        return !Number.isFinite(val);
    }

    inInvalid(val: number) {
        return !Number.isFinite(val);
    }
}