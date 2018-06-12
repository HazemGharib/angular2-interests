import { TestBed, inject } from '@angular/core/testing';

import { InterestService } from './interest.service';

describe('InterestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterestService]
    });
  });

  it('should be created', inject([InterestService], (service: InterestService) => {
    expect(service).toBeTruthy();
  }));

  it('should get Simple Interest as 2000', inject([InterestService], (service: InterestService) => {
    expect(service.getSimpleInterest(1000, 50, 2)).toEqual(2000);
  }));

  it('should get Compound Interest as 2250', inject([InterestService], (service: InterestService) => {
    expect(service.getCompoundInterest(1000, 50, 2, 'Yearly')).toEqual(2250);
  }));

  it('should get Total Interests as 2250', inject([InterestService], (service: InterestService) => {
    expect(service.getTotalInterests([
      {principal: '1000', rate: '50', period: '2', selectedType: 'Simple', selectedFrequency: '--', value: 2000},
      {principal: '2000', rate: '50', period: '2', selectedType: 'Simple', selectedFrequency: '--', value: 4000}
    ])).toEqual(6000);
  }));

});
