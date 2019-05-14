import { TestBed } from '@angular/core/testing';

import { DomainService } from './domain.service';

describe('DomainServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomainService = TestBed.get(DomainService);
    expect(service).toBeTruthy();
  });
});
