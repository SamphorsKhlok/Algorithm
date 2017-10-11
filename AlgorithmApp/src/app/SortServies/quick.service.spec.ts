import { TestBed, inject } from '@angular/core/testing';

import { QuickService } from './quick.service';

describe('QuickService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickService]
    });
  });

  it('should be created', inject([QuickService], (service: QuickService) => {
    expect(service).toBeTruthy();
  }));
});
