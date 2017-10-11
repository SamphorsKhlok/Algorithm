import { TestBed, inject } from '@angular/core/testing';

import { InsertionService } from './insertion.service';

describe('InsertionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsertionService]
    });
  });

  it('should be created', inject([InsertionService], (service: InsertionService) => {
    expect(service).toBeTruthy();
  }));
});
