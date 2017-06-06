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
        L31: <span>Services with provider and ngFor and event 2 way binding to do selection  --- get exchange rate from service <span>
		<br />
		Convert: 
        <input type="number" [(ngModel)]="baseAmt1" />
        <currency-type-selector [(culler)]="baseCurrency"></currency-type-selector>
        = <cite>{{getterTargetAmt1}}</cite>
        <currency-type-selector [(culler)]="targetCurrency"></currency-type-selector>
        <br />
        <br />

        L35: <span>ngIf -- <b>prevent choose same types of both currencies and number pipe</b>.<span>
		<br />
		Convert: 
        <input type="number" [(ngModel)]="baseAmt2" [ngClass]="{error: inInvalid(baseAmt2), warning: baseAmt2 <= 0}" />
        <currency-type-selector [(culler)]="baseCurrency1"></currency-type-selector>
        = <cite>{{getterTargetAmt2 | number: '1.2-2'}}</cite>
        <currency-type-selector [(culler)]="targetCurrency1"></currency-type-selector>
        <ng-template [ngIf]="inInvalid(baseAmt2)">
            <p class="errfont">The base amount is incorrect.</p>
        </ng-template>

        <!-- <p class="errfont" *ngIf="inInvalid(baseAmt2)">The base amount is incorrect.</p> -->
        <p>
            s5L36 -- pipe
        </p>
        <cite>{{now | date:'dd/mm/yyyy'}}</cite>
        <cite>
            {{ {name: "jsonPipe"} | json }}
        </cite>

        <p>
            s5L37 -- custome-pipe (write our own pipe)
        </p>
        
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
            .errfont {
                color: red;
                font-weight: bold;
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

    now = Date.now();

    exchangeRate:number = 0.7;
    baseAmt:number = 1;

    exchangeRate0:number = 0.66;
    baseAmt0:number = 1;

    baseCurrency: string = 'USD';
    targetCurrency: string = 'GBP';
    baseAmt1:number = 1;

    baseCurrency1: string = 'EUR';
    targetCurrency1: string = 'USD';
    baseAmt2:number = 1;

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

    get getterTargetAmt2() {
        const exchangeRate2: number = this.ers.fetchExchangeRate(this.baseCurrency1, this.targetCurrency1);
        return this.baseAmt2 * exchangeRate2;
    }

    inFinite(val: number) {
        return !Number.isFinite(val);
    }

    inInvalid(val: number) {
        return !Number.isFinite(val);
    }
}