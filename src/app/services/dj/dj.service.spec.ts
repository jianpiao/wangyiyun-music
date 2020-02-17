import { TestBed } from '@angular/core/testing';

import { DjService } from './dj.service';

describe('DjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DjService = TestBed.get(DjService);
    expect(service).toBeTruthy();
  });
});
