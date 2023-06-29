import { TestBed } from '@angular/core/testing';

import { NftDataService } from './nft-data.service';

describe('NftDataService', () => {
  let service: NftDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
