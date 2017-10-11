import { TestBed, inject } from '@angular/core/testing';

import { MergeService } from './merge.service';

describe('MergeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MergeService]
    });
  });

  it('should be created', inject([MergeService], (service: MergeService) => {
    expect(service).toBeTruthy();
  }));
});
