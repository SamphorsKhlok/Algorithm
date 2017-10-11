import { TestBed, inject } from '@angular/core/testing';

import { HeapService } from './heap.service';

describe('HeapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeapService]
    });
  });

  it('should be created', inject([HeapService], (service: HeapService) => {
    expect(service).toBeTruthy();
  }));
});
