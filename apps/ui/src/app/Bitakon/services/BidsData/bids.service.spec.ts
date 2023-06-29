import { TestBed } from '@angular/core/testing';

import { BidsService } from './bids.service';

describe('BidsService', () => {
  let service: BidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
