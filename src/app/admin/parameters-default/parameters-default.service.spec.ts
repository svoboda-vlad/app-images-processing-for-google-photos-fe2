import { TestBed } from '@angular/core/testing';

import { ParametersDefaultService } from './parameters-default.service';

describe('ParametersDefaultService', () => {
  let service: ParametersDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametersDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
