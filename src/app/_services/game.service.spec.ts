import { TestBed, inject } from '@angular/core/testing';

import { contestService } from './contest.service';

describe('contestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [contestService]
    });
  });

  it('should be created', inject([contestService], (service: contestService) => {
    expect(service).toBeTruthy();
  }));
});
