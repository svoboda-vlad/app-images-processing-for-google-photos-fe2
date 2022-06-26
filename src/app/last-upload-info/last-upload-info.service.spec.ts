import { TestBed } from '@angular/core/testing';

import { LastUploadInfoService } from './last-upload-info.service';

describe('LastUploadInfoService', () => {
  let service: LastUploadInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastUploadInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
