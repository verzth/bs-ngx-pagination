import { TestBed } from '@angular/core/testing';

import { NgxBootstrapPaginationService } from './ngx-bootstrap-pagination.service';

describe('NgxBootstrapPaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBootstrapPaginationService = TestBed.get(NgxBootstrapPaginationService);
    expect(service).toBeTruthy();
  });
});
