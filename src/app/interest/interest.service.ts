import { Injectable } from '@angular/core';

@Injectable()
export class InterestService {

  constructor() { }

  public getSimpleInterest(principal: number, rate: number, period: number): number {
    return principal * (1 + ((rate / 100) * period));
  }

  public getCompoundInterest(principal: number, rate: number, period: number, frequency: string): number {
    let frequencyValue: number;
    switch (frequency) {
      case 'Monthly':
        frequencyValue = 12;
        break;
      case 'Quarter Yearly':
        frequencyValue = 6;
        break;
      case 'Half Yearly':
        frequencyValue = 3;
        break;
      case 'Yearly':
        frequencyValue = 1;
        break;
      default:
        break;
    }
    return principal * Math.pow((1 + ((rate / 100) / frequencyValue)), (frequencyValue * period));
  }

  public getTotalInterests(interests: any[]): number {
    let totalInterests = 0;

    for (let i = 0; i < interests.length; i++) {
      totalInterests += interests[i].value;
    }
    console.log(interests);
    return totalInterests;
  }
}
