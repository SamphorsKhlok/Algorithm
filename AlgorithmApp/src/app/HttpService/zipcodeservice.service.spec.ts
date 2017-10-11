import { TestBed, inject } from '@angular/core/testing';

import { ZipcodeserviceService } from './zipcodeservice.service';

describe('ZipcodeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZipcodeserviceService]
    });
  });

  it('should be created', inject([ZipcodeserviceService], (service: ZipcodeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
