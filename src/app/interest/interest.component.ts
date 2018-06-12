import { Component, OnInit } from '@angular/core';
import { InterestService } from 'app/interest/interest.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  title = 'Interest Calculator';
  types = ['Simple', 'Compound'];
  frequencies = ['Yearly', 'Half Yearly', 'Quarter Yearly', 'Monthly'];

  principal = 0;
  rate = 0.0;
  period = 0;
  selectedType = this.types[0];
  selectedFrequency = this.frequencies[0];

  calculatedInterests = [];
  totalInterests = 0;

  constructor(private interestService: InterestService) {
   }

  ngOnInit() { }

  onTypeChange(value) {
    this.selectedType = value;
  }

  onFrequencyChange(value) {
    this.selectedFrequency = value;
  }

  calculateInterest() {
    // Check for data validity
    if (isNaN(this.principal) || isNaN(this.period) || isNaN(this.rate)) {
      alert('Please enter correct data');
    }else {

    // Calculate interest
      const interestValue = this.selectedType === 'Simple' ?
        this.interestService.getSimpleInterest(this.principal, this.rate, this.period) :
        this.interestService.getCompoundInterest(this.principal, this.rate, this.period, this.selectedFrequency);

    // Push the calculated interest in the array
    this.calculatedInterests.push({
      principal: this.principal,
      rate: this.rate,
      period: this.period,
      selectedType: this.selectedType,
      selectedFrequency: this.selectedType === 'Simple' ? '--' : this.selectedFrequency,
      value: interestValue
    });

    // Calculate the total of calculated interests
    this.totalInterests = this.interestService.getTotalInterests(this.calculatedInterests);

    this.principal = 0;
    this.rate = 0.0;
    this.period = 0;
    this.selectedType = this.types[0];
    this.selectedFrequency = this.frequencies[0];
    }
  }
}
