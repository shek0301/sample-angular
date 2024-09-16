import { TestBed } from '@angular/core/testing';

import { CusBuiService } from './cus-bui.service';

describe('CusBuiService', () => {
  let service: CusBuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusBuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
