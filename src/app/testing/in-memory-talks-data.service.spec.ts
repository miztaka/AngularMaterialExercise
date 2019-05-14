import { TestBed } from '@angular/core/testing';

import { InMemoryTalksDataService } from './in-memory-talks-data.service';

describe('InMemoryTalksDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryTalksDataService = TestBed.get(InMemoryTalksDataService);
    expect(service).toBeTruthy();
  });
});
