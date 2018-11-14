import { TestBed } from '@angular/core/testing';

import { BsNgxPaginationService } from './bs-ngx-pagination.service';

describe('BsNgxPaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BsNgxPaginationService = TestBed.get(BsNgxPaginationService);
    expect(service).toBeTruthy();
  });
});
