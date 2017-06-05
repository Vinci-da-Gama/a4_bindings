import { Component } from '@angular/core';

@Component({
	selector: 'currency-converter',
	template: `
		<!--bind-value="baseAmt0"-->
		<input type="number" [value]="baseAmt0" /> USD = <strong>{{targetAmt0}}</strong> GBP
		<br />
		<input type="number" [value]="baseAmt1" /> USD = <strong [innerText]="targetAmt1"></strong> GBP
		<br /> L28: (3:59)
		<input type="number" [value]="baseAmt2" #baseAmtField /> USD = <strong [innerText]="targetAmt2"></strong> GBP
		<button (click)="update(baseAmtField.value)">Update_Btn</button>
		<br /> L28: (6:56)
		<input type="number" [value]="baseAmt3" 
			(input)="updateInputEvent($event.target.value)" /> USD = 
		<strong [innerText]="targetAmt3"></strong> GBP

		<br /><br />
		L29: (3:38) two-way binding -- <span>Using Getter function<span>
		<input type="number" [value]="baseAmt4" 
			(input)="updateBaseAmt($event.target.value)" /> USD = 
		<strong [innerText]="targetAmt4"></strong> GBP
		<p>
			<b>{{baseAmt4}}</b> US dollars =
			<cite>{{targetAmt4}}</cite> GRP
		</p>

		<br /> L29: two-way binding -- example 5 -- <span>Using Getter function<span>
		<br />
		Convert: <input type="number" [ngModel]="baseAmt5" 
			(input)="update2ways($event.target.value)" /> USD
		<p>
			<b>{{baseAmt5}}</b> US dollars =
			<cite>{{getterTargetAmt5}}</cite> GRP
		</p>

		<br /> L29: (8:50) two-way binding -- example 6: final 2ways-binding -- 
		<span>2 ways binding [(ngModel)]= "variable"<span>
		<br />
		Convert: <input type="number" [(ngModel)]="baseAmt6" /> USD
		<p>
			<b>{{baseAmt6}}</b> US dollars =
			<cite>{{getterTargetAmt6}}</cite> GRP
		</p>
		
		<converter-with-style></converter-with-style>
    `,
	styles: [
		`
			input[type="number"] {
				width: 10ex;
				text-align: right;
			}
		`
	]
})
export class AppComponent {
	baseAmt0: number = 1;
	targetAmt0: number = 0.7;
	baseAmt1: number = 1;
	targetAmt1: number = 0.75;

	exchangeRate: number = 0.8;
	baseAmt2: number = 1;
	targetAmt2: number = this.exchangeRate;

	exchangeRate0: number = 0.6;
	baseAmt3: number = 1;
	targetAmt3: number = this.exchangeRate0;

	exchangeRate1: number = 0.77;
	baseAmt4: number = 1;

	exchangeRate2: number = 0.85;
	baseAmt5: number = 1;

	exchangeRate3: number = 0.66;
	baseAmt6: number = 1;
	
	update(theBaseAmtValue: string) {
		console.info('68 -- should update : ', theBaseAmtValue, 'as a', typeof theBaseAmtValue);
		this.targetAmt2 = parseFloat(theBaseAmtValue)*this.exchangeRate;
	}
	updateInputEvent(eventTargetValue: string) {
		console.log('72 -- updateInputEvent -- event is: ', event);
		this.targetAmt3 = parseFloat(eventTargetValue)*this.exchangeRate0;
	}

	// example 4
	updateBaseAmt(eventTargetValue: string) {
		this.baseAmt4 = parseFloat(eventTargetValue);
	}

	get targetAmt4() {
		return this.baseAmt4 * this.exchangeRate1;
	}
	/**
	 * End example 4
	 */

	// example 5
	update2ways(eventInput: string) {
		console.log('90 -- updateInputEvent -- event is: ', event);
		this.baseAmt5 = parseFloat(eventInput); 
	}
	get getterTargetAmt5() {
		return this.baseAmt5 * this.exchangeRate2;
	}
	/**
	 * End example 5
	 */

	// example 6 -- final 2-ways-binding
	get getterTargetAmt6() {
		let amount: number = this.baseAmt6 * this.exchangeRate3;
		console.log('116 -- amount is: '+amount);
		return amount;
	}
	/**
	 * End Example 6
	 */

}
