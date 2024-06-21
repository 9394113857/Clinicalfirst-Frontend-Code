import { TestBed } from '@angular/core/testing';

import { FirstPharmacyService } from './first-pharmacy.service';

describe('FirstPharmacyService', () => {
  let service: FirstPharmacyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstPharmacyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
