import { TestBed } from '@angular/core/testing';

import { ThemeTogglerService } from './theme-toggler.service';

describe('ThemeTogglerService', () => {
  let service: ThemeTogglerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeTogglerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
