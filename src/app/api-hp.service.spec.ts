import { TestBed } from '@angular/core/testing';

import { ApiHPService } from './api-hp.service';

describe('ApiHPService', () => {
  let service: ApiHPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
