
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-change-calculator',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatCardModule],
  templateUrl: './change-calculator.component.html',
  styleUrls: ['./change-calculator.component.css']
})
export class ChangeCalculatorComponent {
  RATE = 1.95583;

  dueBGN = new FormControl('');
  dueEUR = new FormControl('');
  paidBGN = new FormControl('');
  paidEUR = new FormControl('');
  changeBGN = 0;
  changeEUR = 0;

  lastDueEdited: 'BGN' | 'EUR' = 'BGN';
  lastPaidEdited: 'BGN' | 'EUR' = 'BGN';

  constructor() {
    this.dueBGN.valueChanges.subscribe(val => {
      this.lastDueEdited = 'BGN';
      this.dueEUR.setValue(val ? (Number(val) / this.RATE).toFixed(2) : '', { emitEvent: false });
      this.calculate();
    });

    this.dueEUR.valueChanges.subscribe(val => {
      this.lastDueEdited = 'EUR';
      this.dueBGN.setValue(val ? (Number(val) * this.RATE).toFixed(2) : '', { emitEvent: false });
      this.calculate();
    });

    this.paidBGN.valueChanges.subscribe(val => {
      this.lastPaidEdited = 'BGN';
      this.paidEUR.setValue(val ? (Number(val) / this.RATE).toFixed(2) : '', { emitEvent: false });
      this.calculate();
    });

    this.paidEUR.valueChanges.subscribe(val => {
      this.lastPaidEdited = 'EUR';
      this.paidBGN.setValue(val ? (Number(val) * this.RATE).toFixed(2) : '', { emitEvent: false });
      this.calculate();
    });
  }

  calculate() {
    const dueTotalBGN = this.lastDueEdited === 'BGN' ? Number(this.dueBGN.value) || 0
                                                      : (Number(this.dueEUR.value) || 0 ) * this.RATE;

    const paidTotalBGN = this.lastPaidEdited === 'BGN' ? Number(this.paidBGN.value) || 0
                                                       : (Number(this.paidEUR.value) || 0) * this.RATE;

    const change = paidTotalBGN - dueTotalBGN;
    this.changeBGN = change > 0 ? Number(change.toFixed(2)) : 0 ;
    this.changeEUR = change > 0 ? Number((change / this.RATE).toFixed(2)) : 0;
  }

  clear() {
    this.dueBGN.setValue('', { emitEvent: false });
    this.dueEUR.setValue('', { emitEvent: false });
    this.paidBGN.setValue('', { emitEvent: false });
    this.paidEUR.setValue('', { emitEvent: false });
  
    this.changeBGN = 0;
    this.changeEUR = 0;
  
    this.lastDueEdited = 'BGN';
    this.lastPaidEdited = 'BGN';
  }
  
  
  
}

